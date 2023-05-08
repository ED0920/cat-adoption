import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { useQuery, useMutation } from "@apollo/client";
import { QUERY_GET_CAT } from "../utils/queries";
import { ADOPT_A_CAT } from "../utils/mutations";

import Auth from "../utils/auth";

const Spacer = ({ y = 10, x = 0 }) => {
  return <div style={{ height: y, width: x }}></div>;
};
const body = {
  display: "grid",
  gridTemplateRows: "1fr ",
  rowGap: 15,
  justifyContent: "center",
  alignItems: "center",
  background: "#F9F4F1",
  minHeight: "80vh",
};
const cardContainer = {
  margin: "50px",
  display: "flex",
  padding: "10px",
  boxSizing: "border-box",
  border: "15px solid #444c54",
  color: "#444c54",
  borderRadius: "5px",
  //   background: "#444c54",
  minWidth: "800px",
  minHeight: "400px",
};
const image = {
  width: "100%",
  borderRadius: "10px",
  background: "#444c54",
};
const details = {
  padding: "30px",
  justifyContent: "center",
  minWidth: "300px",
};

const link = {
  textDecoration: "underline",
  color: "#444b54",
};
const adoptMe = {
  background: "#C89B7B",
  border: "none",
  borderRadius: "7px",
  width: "125px",
  color: "#444b54",
  fontSize: "15px",
  padding: "10px",
};

const Cat = ({
  name,
  state,
  age,
  sex,
  colour,
  breed,
  personality,
  bio,
  imgUrl,
}) => {

  const [adopt, { error, data }] = useMutation(ADOPT_A_CAT);
  const { id } = useParams();
  const userId = Auth.getUserId();

  const handleAdoption = async (event) => {
    event.preventDefault();

    try {
      const { data } = await adopt({
        variables: {userId: userId, catId: id},
      });
    } catch(e) {
      console.error(e);
    }

    window.location.assign('/');
  };

  return (
    <div>
      <div style={cardContainer}>
        <img style={image} src={require(`../assets/${imgUrl}`)} alt="cat img" />
        <div style={details}>
          <div>
            {" "}
            <b>Name: </b> {name}
          </div>
          <Spacer />
          <div>
            <b>State: </b> {state}
          </div>
          <Spacer />
          <div>
            {" "}
            <b>Age: </b> {age}
          </div>
          <Spacer />
          <div>
            <b>Sex: </b> {sex}
          </div>
          <Spacer />
          <div>
            <b>Breed: </b>
            {breed}
          </div>
          <Spacer />
          <div>
            <b>Colour: </b>
            {colour}
          </div>
          <Spacer />
          <div>
            <b>Personality: </b> {personality}{" "}
          </div>
          <Spacer />
          <div>
            <b>Bio: </b> {bio}{" "}
          </div>
          <Spacer y={100} />
          {Auth.loggedIn() ? (
            <>
              <div>
                <button onClick={handleAdoption} style={adoptMe}>
                  <b style={link}>Adopt me now</b>
                </button>
              </div>
            </>
          ) : (
            <>
              <div>
                <Link to={"/login"}>
                  <b style={link}>Login to adopt me!</b>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>{" "}
    </div>
  );
};

const CatProfile = () => {
  const [dbData, setDbData] = useState([]);
  const { id } = useParams();

  const { loading, data } = useQuery(QUERY_GET_CAT, {
    variables: { catId: id },
  });
  const cat = data?.cat || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div style={body}>
        <Cat
          name={cat.name}
          state={cat.state}
          age={cat.age}
          sex={cat.sex}
          breed={cat.breed}
          colour={cat.colour}
          personality={cat.personality}
          bio={cat.bioText}
          imgUrl={cat.imgFilename}
        />
      </div>
    </div>
  );
};

export default CatProfile;
