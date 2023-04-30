import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const body = {
  minHeight: "55vh",
  background: "#F9F4F1",
  color: "#444c54",
  padding: "5vh",
};
const title = {
  fontFamily: "monaco",
  fontWeight: "bold",
  fontSize: "26px",
};

function AboutUs() {
  return (
    <>
      <Header />
      <div style={body}>
        <div style={title}>About Us</div>
        <br></br>
        <div>
          {" "}
          Another Chance care for animals across Australia, by rehoming
          neglected and unwanted animals through our community. We work towards
          find our kitten and cats their forever home. The RSPCA offers a number
          of services which assist in caring for animals and provide relevant
          information and advice to help educate the community on animal welfare
          issues and concerns. For most animals that find their way to an RSPCA
          shelter, it is the beginning of a new life. It's where we rescue,
          rehabilitate and rehome.{" "}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;
