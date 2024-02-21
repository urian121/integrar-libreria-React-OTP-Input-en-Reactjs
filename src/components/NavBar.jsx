import logo from "../imgs/mercado-libre-logo.png";

const NavBar = () => {
  return (
    <nav className="navbar bg-body-tertiary custom_navbar">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img
            src={logo}
            alt="Mercado Libre"
            className="logo"
            style={{ width: "150px" }}
          />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
