import "./Header.scss";
import { NavLink, Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className={`header__content header__content`}>
        <Link to="/" className="header__title--text-decoraction">
          <h1 className={`header__title`}>ClassiFind</h1>
        </Link>
        <div className="header__links">
          <NavLink to="/" className={`header__link`}>
            Home
          </NavLink>
          <NavLink to="/quiz" className={`header__link`}>
            Quiz
          </NavLink>
          <NavLink to="/MyFinds" className={`header__link`}>
            My Finds
          </NavLink>
        </div>
      </div>
    </header>
  );
}
