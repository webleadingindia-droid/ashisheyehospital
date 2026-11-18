'use client';
import { useEffect, useState } from 'react';

export default function Loader() {
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setHidden(true), 600);
    return () => clearTimeout(t);
  }, []);
  return (
    <div id="loader" className={hidden ? 'hidden' : ''}>
      <div className="loader-inner">
        <div className="loader-eye"><div className="loader-pupil"></div></div>
        <p>Loading...</p>
      </div>
    </div>
  );
}
