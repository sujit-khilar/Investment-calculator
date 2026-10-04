import logo from "../assets/modern-calculator-icon-vector.jpg";
import "./Header.css";

export default function Header() {
  return (
    <header className="investment-header">
      <div className="header-glow"></div>

      <div className="header-content">
        {/* Brand */}
        <div className="brand-section">
          <div className="logo-wrapper">
            <img
              src={logo}
              alt="Investment Calculator"
              className="header-logo"
            />

            <span className="logo-pulse"></span>
          </div>

          <div className="brand-text">
            <div className="brand-title">
              <h1>InvestWise</h1>
              <span className="pro-badge">PRO</span>
            </div>

            <p>Smart Investment Calculator</p>
          </div>
        </div>

        {/* Header Actions */}
        <div className="header-actions">
          <div className="market-status">
            <span className="status-dot"></span>
            <span>Markets Open</span>
          </div>

          <button
            className="header-icon-btn"
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            ☼
          </button>

          <button className="get-started-btn">
            <span>Start Planning</span>
            <span className="arrow">→</span>
          </button>
        </div>
      </div>

      {/* Decorative bottom line */}
      <div className="header-progress">
        <span></span>
      </div>
    </header>
  );
}
