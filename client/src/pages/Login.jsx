import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const body = {
  minHeight: "65vh",
  background: "#6461A0",
  color: "#444c54",
};

function Login() {
  return (
    <>
      <Header />
      <div style={body}>Login</div>
      <Footer />
    </>
  );
}

export default Login;
