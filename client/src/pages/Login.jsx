import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Loginpg from "../components/Login";

const body = {
  minHeight: "60vh",
  //   background: "#6461A0",
  color: "#444c54",
};

function Login() {
  return (
    <>
      <Header />
      <div style={body}>
        <Loginpg />
      </div>
      <Footer />
    </>
  );
}

export default Login;
