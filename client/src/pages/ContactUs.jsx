import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const body = {
  minHeight: "65vh",
  background: "#F9F4F1",
  color: "#444c54",
  padding: "100px",
};
const Spacer = ({ y = 20, x = 0 }) => {
  return <div style={{ height: y, width: x }} />;
};

function ContactUs() {
  return (
    <>
      <Header />
      <div style={body}>
        <h1>Contact Us</h1>
        <div>
          <label>
            Title:
            <Spacer />
            <input
              style={{
                width: "50%",
                height: "40px",
                boxSizing: "border-box",
                display: "flex",
              }}
              type="Text"
            />
          </label>
        </div>
        <Spacer />
        <div>
          <label>
            Message:
            <Spacer />
            <input
              style={{
                width: "50%",
                height: "400px",
                boxSizing: "border-box",
                display: "flex",
              }}
              type="Text"
            />
          </label>
          <Spacer />
          <button type="submit"> Submit</button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;
