import { Link } from "react-router-dom";
import { AuthContext } from "../ContextApi/ContextProvider";
import { useContext, useState } from "react";

function Usernav() {
  const { token, currentuser } = useContext(AuthContext);
  const [curser, setCuser] = useState(currentuser);

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
              src="img/ideal_bits_logo.png"
              className="logo_image"
              alt="logo"
            />
            IDEAL BITS
          </Link>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li></li>
            <li>
              <Link to="/ship" className="page-scroll">
                Ship
              </Link>
            </li>
            <li>
              <Link to="/orders" className="page-scroll">
                Orders
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
                <img
                  src={curser.profilepic}
                  alt=""
                  style={{
                    width: "40px",
                    height: "40px",
                    // border: "1px solid black",
                  }}
                />
                <p>{curser.username}</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Usernav;
