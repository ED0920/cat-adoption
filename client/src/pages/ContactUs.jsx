import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

import Auth from "../utils/auth";

const body = {
  minHeight: "65vh",
  background: "#F9F4F1",
  color: "#444c54",
  padding: "100px",
};

const button = {
  background: "#C89B7B",
  border: "0px",
  borderRadius: "3px",
  width: "10%",
};

const link = {
  textDecoration: "underline",
  color: "#444b54",
};

const Spacer = ({ y = 20, x = 0 }) => {
  return <div style={{ height: y, width: x }} />;
};

function ContactUs() {

  const [inputs, setInputs] = useState({title: '', message: ''});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInputs((values) => ({ ...values, [name]: value }));
    setSubmitted(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setInputs({title: '', message: ''});
    setSubmitted(true);
  };

  return (
    <>
      <Header />
      <div style={body}>
        <form onSubmit={handleSubmit}>
          <Spacer />
          <h1>Contact Us</h1>
          <div style={{ width: "100%" }}>
            <label style={{ width: "100%" }}>
              Title:
              <Spacer />
              <input
                style={{
                  width: "50%",
                  height: "40px",
                  boxSizing: "border-box",
                  display: "flex",
                }}
                type="text"
                value={inputs.title}
                onChange={handleChange}
                name="title"
              />
            </label>
          </div>
          <Spacer />
          <div style={{ width: "100%" }}>
            <label style={{ width: "100%" }}>
              Message:
              <Spacer />
              <textarea
                style={{
                  width: "50%",
                  boxSizing: "border-box",
                  display: "flex",
                }}
                value={inputs.message}
                onChange={handleChange}
                name="message"
                rows={20}
              />
            </label>
            <Spacer />
            {submitted &&
              <>
                <p>Thanks for your enquiry. A representative from Another Chance will be in touch.</p>
                <Spacer />
              </>
            }
            {Auth.loggedIn() ? (
              <button style={button} type="submit">
                {" "}
                Submit
              </button>
            ) : (
              <Link to={"/login"}>
                <b style={link}>Login to contact us!</b>
              </Link>
            )}
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;
