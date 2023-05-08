import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import User from "../components/User";
//import Card, { CatCard } from "../components/CatCard";
import LikeCats from "../components/Likecats";

import { useQuery } from "@apollo/client";
import { QUERY_GET_USER } from "../utils/queries";
import Auth from "../utils/auth";

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

  const userId = Auth.getUserId(); 

  const { loading, data } = useQuery(QUERY_GET_USER, {
    variables: { userId: userId },
  });
  const user = data?.user || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log(user);

  return (
    <>
      <Header />
      <div style={body}>
        <div style={title}>Profile</div>
        <Spacer y={20} />

        <div style={columns}>
          <User 
            firstname={user.firstname}
            lastname={user.lastname}
            number={user.phonenumber}
            email={user.email}
            password={"**********"}
          />
          {user.cats.length > 0 &&
            <div style={profileContainer}>
              <LikeCats cats={user.cats}/>
            </div>
          }
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Profile;
