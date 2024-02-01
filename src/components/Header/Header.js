import "./Header.scss";
import { NavLink, Link } from "react-router-dom";

export default function Header({ color }) {
  return (
    <header>
      <div className={`header__content header__content--${color}`}>
        <Link to="/" className="header__title--text-decoraction">
          <h1 className={`header__title ${color}__title`}>ClassiFind</h1>
        </Link>
        <div className="header__links">
          <NavLink to="/" className={`header__link ${color}`}>
            Home
          </NavLink>
          <NavLink to="/quiz" className={`header__link ${color}`}>
            Quiz
          </NavLink>
          <NavLink to="/MyFinds" className={`header__link ${color}`}>
            My Finds
          </NavLink>
          <NavLink to="/login" className={`header__link ${color}`}>
            Login
          </NavLink>
        </div>
      </div>
    </header>
  );
}
