
import './GetInvolvedSection.css';


export default function GetInvolvedSection() {
  return (
    <section id="get-involved" className="get-involved-section">
      <div className="container">
        <h2 className="section-title">Get Involved</h2>
        <div className="involvement-grid">
          <div className="involvement-card">
            <h3>Donate</h3>
            <p>Your contribution helps fund vital conservation projects, from habitat restoration to anti-poaching initiatives.</p>
            <a href="#" className="btn btn-secondary">Donate Now</a>
          </div>
          <div className="involvement-card">
            <h3>Volunteer</h3>
            <p>Lend your skills and passion to our cause. We have a variety of volunteer opportunities both in the field and remotely.</p>
            <a href="#" className="btn btn-secondary">Join Us</a>
          </div>
          <div className="involvement-card">
            <h3>Spread the Word</h3>
            <p>Awareness is the first step to change. Share our mission with your network and help us grow our community.</p>
            <a href="#" className="btn btn-secondary">Share</a>
          </div>
        </div>
      </div>
    </section>
  )
}

