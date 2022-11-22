import { useContext } from "react";
import Logo from "./Logo";
import { ThemeContext } from "./theme-context";
import { Outlet, NavLink } from "react-router-dom";

export default function Nav() {
  const themeContext = useContext(ThemeContext);

  return (
    <>
      <nav className={`Nav nav-color`}>
        {/* Navigation */}
        <Logo />
        <div className="nav-wrapper">
          <NavLink activeClassName="active" className={`nav-item`} to="/">
            Home
          </NavLink>
          <NavLink activeClassName="active" className={`nav-item`} to="about">
            About
          </NavLink>
          <NavLink activeClassName="active" className={`nav-item`} to="service">
            Service
          </NavLink>
          <NavLink activeClassName="active" className={`nav-item`} to="contact">
            Contact
          </NavLink>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
