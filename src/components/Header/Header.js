import "./Header.scss";
import { NavLink } from "react-router-dom";

export default function Header({ color }) {
  console.log(color);
  return (
    <header>
      <div className={`header__content header__content--${color}`}>
        <h1 className={`header__title ${color}`}>ClassiFind</h1>
        <div className="header__links">
          <NavLink to="/" className={`header__link ${color}`}>
            Home
          </NavLink>
          <NavLink to="/quiz" className={`header__link ${color}`}>
            Quiz
          </NavLink>
          <NavLink to="/myfinds" className={`header__link ${color}`}>
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
