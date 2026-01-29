import "./AnimalsSection.css";

export default function AnimalsSection() {
  return (
    <section id="animals" className="animals-section">
      <div className="container">
        <h2 className="section-title">Featured Animals</h2>
        <div className="animals-grid">
          <div className="animal-card">
            <div className="animal-card-inner">
              <div className="animal-card-front">
                <h3>Amur Leopard</h3>
              </div>
              <div className="animal-card-back">
                <p>Status: Critically Endangered</p>
                <p>Population: Around 100</p>
              </div>
            </div>
          </div>
          <div className="animal-card">
            <div className="animal-card-inner">
              <div className="animal-card-front">
                <h3>Vaquita</h3>
              </div>
              <div className="animal-card-back">
                <p>Status: Critically Endangered</p>
                <p>Population: About 10</p>
              </div>
            </div>
          </div>
          <div className="animal-card">
            <div className="animal-card-inner">
              <div className="animal-card-front">
                <h3>Javan Rhino</h3>
              </div>
              <div className="animal-card-back">
                <p>Status: Critically Endangered</p>
                <p>Population: Around 75</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
