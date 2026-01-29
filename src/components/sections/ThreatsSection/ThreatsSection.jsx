import "./ThreatsSection.css";

export default function ThreatsSection() {
  return (
    <section id="threats" className="threats-section">
      <div className="container">
        <h2 className="section-title">Major Threats to Wildlife</h2>
        <div className="threats-grid">
          <div className="threat-card">
            <h3>Habitat Loss</h3>
            <p>
              The destruction and fragmentation of natural habitats are the
              primary threats to wildlife, driven by agriculture, urbanization,
              and deforestation.
            </p>
          </div>
          <div className="threat-card">
            <h3>Climate Change</h3>
            <p>
              Rising temperatures and extreme weather events disrupt ecosystems,
              affecting species' ability to find food, reproduce, and survive.
            </p>
          </div>
          <div className="threat-card">
            <h3>Poaching & Illegal Trade</h3>
            <p>
              The illegal hunting and trafficking of animals for their parts
              continues to decimate populations of elephants, rhinos, tigers,
              and more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
