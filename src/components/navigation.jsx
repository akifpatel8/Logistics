import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <Link className="navbar-brand page-scroll" to="/">
            <img
              src="img/ideal_bits_logo.jpeg"
              className="logo_image"
              alt="logo"
            />
          </Link>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li></li>
            <li>
              <Link to="/features" className="page-scroll">
                Features
              </Link>
            </li>
            <li>
              <Link to="/about" className="page-scroll">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="page-scroll">
                Services
              </Link>
            </li>

            <li>
              <Link to="/team" className="page-scroll">
                Team
              </Link>
            </li>

            <li>
              <Link to="/login" className="page-scroll">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
