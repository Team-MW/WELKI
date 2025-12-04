import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="brand">
          <div className="brand-logo">W</div>
          <div className="brand-text">
            <span className="brand-name">WELKI</span>
            <span className="brand-tagline">Hygiène & Services 3D</span>
          </div>
        </div>
        <nav className="nav-links">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'nav-link nav-link-active' : 'nav-link'
            }
          >
            Accueil
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? 'nav-link nav-link-active' : 'nav-link'
            }
          >
            Nos services
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? 'nav-link nav-link-primary' : 'nav-link nav-link-cta'
            }
          >
            Devis / Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;


