import "./Header.scss";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="header__content">
        <h1 className="header__title">ClassiFind</h1>
        <div className="header__links">
          <NavLink to="/" className="header__link">
            Home
          </NavLink>
          <NavLink to="recommendations" className="header__link">
            Quiz
          </NavLink>
          <NavLink to="mymusic" className="header__link">
            My Finds
          </NavLink>
          <NavLink to="login" className="header__link">
            Login
          </NavLink>
        </div>
      </div>
    </header>
  );
}
