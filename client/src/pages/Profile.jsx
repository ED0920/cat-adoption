import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import User from "../components/User";
import Card, { CatCard } from "../components/CatCard";
import LikeCats from "../components/Likecats";

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

const columns = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  justifyContent: "center",
  background: "#F9F4F1",
};
const profileContainer = {
  display: "flex",
  flexDirection: "column",
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

        <div style={columns}>
          <User />
          <div style={profileContainer}>
            <LikeCats />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Profile;
