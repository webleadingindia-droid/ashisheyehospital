'use client';
import { useEffect, useState } from 'react';

type Item = { image: string; label: string; desc?: string; category: string };

export default function GalleryGrid({ items }: { items: Item[] }) {
  const [active, setActive] = useState<Item | null>(null);

  useEffect(() => {
    document.body.style.overflow = active ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setActive(null); };
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [active]);

  return (
    <>
      <div className="gallery-grid reveal" id="galleryGrid">
        {items.map((item, i) => (
          <div key={i} className="gallery-item" data-category={item.category} title={item.label} onClick={() => setActive(item)}>
            <div className="gallery-item-inner">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.image} alt={item.label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className="gallery-item-overlay">
              <i className="fas fa-search-plus"></i>
              <span className="gallery-overlay-text"></span>
            </div>
            <div className="gallery-caption"></div>
          </div>
        ))}
      </div>

      <div id="lightbox" className="lightbox" onClick={() => setActive(null)}
           style={{ display: active ? 'block' : 'none', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.9)', zIndex: 9999, cursor: 'pointer' }}>
        <span className="lightbox-close" style={{ position: 'absolute', top: 20, right: 40, color: '#fff', fontSize: 40, cursor: 'pointer' }}>&times;</span>
        {active && (
          // eslint-disable-next-line @next/next/no-img-element
          <img className="lightbox-img" id="lightboxImg" src={active.image} alt={active.label}
               style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', maxWidth: '90%', maxHeight: '90%', objectFit: 'contain' }} />
        )}
      </div>
    </>
  );
}
