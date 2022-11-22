import LogoImage from "./logo.png";
export default function Logo() {
  return (
    <nav className="Logo">
      {/* Navigation */}
      <a className="logo-link" href="home">
        <img className="logo-image" src={LogoImage} alt="Logo" />
      </a>
    </nav>
  );
}
