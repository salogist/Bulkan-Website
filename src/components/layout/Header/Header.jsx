import "./Header.css";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <div className="logo">Bulkan</div>
        <nav>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#mission">Mission</a>
            </li>
            <li>
              <a href="#animals">Animals</a>
            </li>
            <li>
              <a href="#get-involved">Get Involved</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
