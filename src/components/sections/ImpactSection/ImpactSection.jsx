import "./ImpactSection.css";

export default function ImpactSection() {
  return (
    <section id="impact" className="impact-section">
      <div className="container">
        <h2 className="section-title">Our Impact</h2>
        <div className="impact-grid">
          <div className="impact-stat">
            <span className="impact-number">1M+</span>
            <p className="impact-label">Acres of Habitat Protected</p>
          </div>
          <div className="impact-stat">
            <span className="impact-number">50+</span>
            <p className="impact-label">Species Supported</p>
          </div>
          <div className="impact-stat">
            <span className="impact-number">10K+</span>
            <p className="impact-label">Community Members Engaged</p>
          </div>
        </div>
      </div>
    </section>
  );
}
