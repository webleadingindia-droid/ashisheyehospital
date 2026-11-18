import { HOSPITAL_PHONE, HOSPITAL_EMAIL } from '@/lib/config';

export default function TopBar() {
  return (
    <div className="top-bar">
      <div className="container">
        <div className="top-bar-left">
          <span><i className="fas fa-map-marker-alt"></i> Mota Varachha, Surat, Gujarat</span>
          <span><i className="fas fa-clock"></i> Mon–Sat: 9:00 AM – 7:00 PM</span>
        </div>
        <div className="top-bar-right">
          <a href={`tel:${HOSPITAL_PHONE}`}><i className="fas fa-phone"></i> {HOSPITAL_PHONE}</a>
          <a href={`mailto:${HOSPITAL_EMAIL}`}><i className="fas fa-envelope"></i> {HOSPITAL_EMAIL}</a>
        </div>
      </div>
    </div>
  );
}
