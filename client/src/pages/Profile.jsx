import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import User from "../components/User";

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

const text = {
  lineHeight: 2,
};
const Spacer = ({ y, x }) => {
  return <div style={{ height: y, width: x }}></div>;
};

function Profile() {
  return (
    <>
      <Header />
      <div style={body}>
        <div style={title}>Profile</div>
        <Spacer y={20} />

        <div style={text}>
          <User />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Profile;
