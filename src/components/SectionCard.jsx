function SectionCard({ label, title, children, accent = 'green' }) {
  return (
    <section className={`section-card section-card-${accent}`}>
      <div className="section-card-header">
        <span className="section-card-label">{label}</span>
        <h2 className="section-card-title">{title}</h2>
      </div>
      <div className="section-card-body">{children}</div>
    </section>
  );
}

export default SectionCard;


