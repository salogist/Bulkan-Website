import "./NewsletterSection.css"

export default function NewsletterSection() {
  return (
    <section id="newsletter" className="newsletter-section">
      <div className="container">
        <h2 className="section-title">Stay Informed</h2>
        <p>
          Subscribe to our newsletter for the latest news on wildlife
          conservation and how you can help.
        </p>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter your email" />
          <button type="submit" className="btn btn-primary">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
