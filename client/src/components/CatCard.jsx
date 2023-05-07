import React from "react";
import { Link } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { QUERY_AVAILABLE_CATS } from "../utils/queries";

import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";

const body = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  justifyContent: "center",
  background: "#F9F4F1",
};
const cardContainer = {
  margin: "10%",
  padding: "10px",
  boxSizing: "border-box",
  border: "15px solid #444c54",
  color: "#444c54",
  borderRadius: "5px",
  background: "#444c54",
};
const image = {
  width: "100%",
  height: "40vh",
  objectFit: "fill",
  borderRadius: "10px",
};
const details = {
  marginBottom: "10px",
  padding: "5px",
  justifyContent: "center",
  border: "3px solid #444c54",
  color: "white",
  fontSize: "20px",
};

const filterBody = {
  display: "flex",
  justifyContent: "center",
  margin: "25px",
};

const dropdownStyle = {
  background: "#C89B7B",
  border: "#C89B7B",
  marginLeft: "20px",
};

const search = {
  background: "#444b54",
  border: " solid 3px #444b54",
  borderRadius: "5px ",
  width: "125px",
  height: "35px",
  margin: "15px",
  color: "white",
};

const adoptMe = {
  background: "#C89B7B",
  border: " solid 3px #444b54",
  borderRadius: "7px ",
  width: "125px",
  color: "#444b54",
  float: "right",
  marginBottom: "20px",
  fontSize: "15px",
};

const filterComponent = {
  display: "flex",
  margin: "15px",
};
const Spacer = ({ y = 10, x = 0 }) => {
  return <div style={{ height: y, width: x }} />;
};

const CatCard = ({ id, name, location, age, breed, imgUrl }) => {
  return (
    <div>
      <div style={cardContainer}>
        <Link to={`/cats/${id}`}>
          <img
            style={image}
            src={require(`../assets/${imgUrl}`)}
            alt="cat img"
          />
        </Link>
        <div style={details}>
          <div>
            <b>{name}</b>
          </div>
          <Spacer />
          <div>Age: {age}</div>
          <Spacer />
          <div>{location}</div>
          <Spacer />
          <div>{breed}</div>
          <button style={adoptMe}>
            <Link style={{ color: "#444b54" }} to={"/login"}>
              <b>Adopt Me</b>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

function StateDropdown() {
  const [state, setState] = useState("");

  return (
    <Dropdown
      onSelect={(eventKey, event) => {
        setState(eventKey);
      }}
    >
      <Dropdown.Toggle
        style={dropdownStyle}
        variant="success"
        id="dropdown-basic"
      >
        {state || "Select State"}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item eventKey={"NSW"}>NSW</Dropdown.Item>
        <Dropdown.Item eventKey={"ACT"}>ACT</Dropdown.Item>
        <Dropdown.Item eventKey={"QLD"}>QLD</Dropdown.Item>
        <Dropdown.Item eventKey={"NT"}>NT</Dropdown.Item>
        <Dropdown.Item eventKey={"SA"}>SA</Dropdown.Item>
        <Dropdown.Item eventKey={"WA"}>WA</Dropdown.Item>
        <Dropdown.Item eventKey={"TAS"}>TAS</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
function BreedDropdown() {
  const [state, setState] = useState("");
  return (
    <Dropdown
      onSelect={(eventKey, event) => {
        setState(eventKey);
      }}
    >
      <Dropdown.Toggle
        style={dropdownStyle}
        variant="success"
        id="dropdown-basic"
      >
        {state || "Select State"}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item eventKey={"Female"}>Female</Dropdown.Item>
        <Dropdown.Item eventKey={"Male"}>Male</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

const CatCardContainer = () => {
  const { loading, data } = useQuery(QUERY_AVAILABLE_CATS);
  const cats = data?.availableCats || [];

  console.log(cats);

  return (
    <div>
      <div style={filterBody}>
        <div style={filterComponent}>
          <h3>State:</h3>
          <StateDropdown />
        </div>
        <div style={filterComponent}>
          <h3>Sex:</h3>
          <BreedDropdown />
        </div>
        <button style={search}> Search</button>
      </div>
      <div style={body}>
        {cats.map((cat) => {
          return (
            <CatCard
              id={cat._id}
              name={cat.name}
              location={cat.state}
              age={cat.age}
              breed={cat.breed}
              imgUrl={cat.imgFilename}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CatCardContainer;
export { CatCard };
