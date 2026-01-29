import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="container">
        <h1 className="hero-title">Guardians of the Wild</h1>
        <p className="hero-subtitle">
          Join us in the fight to protect Earth's most vulnerable creatures.
        </p>
        <a href="#get-involved" className="btn btn-primary">
          Learn How You Can Help
        </a>
      </div>
    </section>
  );
}
