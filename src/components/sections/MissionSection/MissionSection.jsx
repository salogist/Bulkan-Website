
import './MissionSection.css';

export default function MissionSection() {
  return (
    <section id="mission" className="mission-section">
      <div className="container">
        <h2 className="section-title">Our Mission</h2>
        <div className="mission-content">
          <div className="mission-item">
            <h3>Educate</h3>
            <p>To provide accessible and accurate information about the threats facing wildlife today, from habitat loss to climate change.</p>
          </div>
          <div className="mission-item">
            <h3>Inspire</h3>
            <p>To foster a deeper connection with the natural world and inspire a sense of responsibility for its preservation.</p>
          </div>
          <div className="mission-item">
            <h3>Empower</h3>
            <p>To equip individuals with the knowledge and resources to make a tangible difference for endangered animals.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

