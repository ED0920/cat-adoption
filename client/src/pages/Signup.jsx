import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SignUp from "../components/Signup";

const body = {
  minHeight: "70vh",
  color: "#444c54",
};

function Signup() {
  return (
    <>
      <Header />
      <div style={body}>
        <SignUp />
      </div>
      <Footer />
    </>
  );
}

export default Signup;
