import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const body = {
  minHeight: "65vh",
  background: "#F9F4F1",
  color: "#444c54",
};

function ContactUs() {
  return (
    <>
      <Header />
      <div style={body}>Contact Us</div>
      <Footer />
    </>
  );
}

export default ContactUs;
