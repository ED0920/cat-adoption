import React from "react";
import { Link } from "react-router-dom";

import Auth from "../utils/auth";

const NavBar = {
  display: "flex",
  flexWrap: "wrap",
  background: "#C89B7B",
  margin: "auto",
  minHeight: "25vh",
  padding: "20 px",
  fontFamily: "san-serif, Arial",
};

const Nav = {
  margin: "auto",
};
const icon = {
  margin: "auto",
  // justifyContent: 'center'
};

const navStyle = {
  margin: "40px",
  color: "#444b54",
  fontWeight: "Bold",
};

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <div className="Nav" style={NavBar}>
      <img style={icon} src={require("../assets/another.png")} alt="logo" />

      <div className="Nav" style={Nav}>
        <Link to={"/"} style={navStyle}>
          {" "}
          About Us{" "}
        </Link>
        <Link to={"/cats"} style={navStyle}>
          Cats Available for Adoption
        </Link>
        <Link to={"/rehome"} style={navStyle}>
          Rehoming Services
        </Link>
        <Link to={"/profile"} style={navStyle}>
          Profile
        </Link>
        {Auth.loggedIn() ? (
          <>
            <a style={navStyle} onClick={logout} href="#">
              Logout
            </a>
          </>
        ) : (
          <>
            <Link to={"/login"} style={navStyle}>
              Login
            </Link>
            <Link to={"/signup"} style={navStyle}>
              Sign Up
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
