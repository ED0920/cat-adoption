import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";

import { useQuery } from "@apollo/client";
import { QUERY_AVAILABLE_CATS } from "../utils/queries";

import Dropdown from "react-bootstrap/Dropdown";

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
  padding: "10px",
  justifyContent: "center",
  border: "3px solid #444c54",
  color: "white",
  fontSize: "20px",
};
const icon = {
  float: "right",
  color: "#C89B7B",
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
        <a href={`cats/${id}`}>
          <img
            style={image}
            src={require(`../assets/${imgUrl}`)}
            alt="cat img"
          />
        </a>
        <div style={details}>
          <div>
            <b>{name}</b>
          </div>
          <Spacer />
          <div>{age}</div>
          <Spacer />
          <div>{location}</div>
          <Spacer />
          <div>{breed}</div>
          <div><Button><Link to={"/login"}>
              <b style={link}>Adopt Me</b>
            </Link></Button></div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

function StateDropdown() {
  return (
    <Dropdown>
      <Dropdown.Toggle
        style={dropdownStyle}
        variant="success"
        id="dropdown-basic"
      >
        Select State
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">NSW</Dropdown.Item>
        <Dropdown.Item href="#/action-2">ACT</Dropdown.Item>
        <Dropdown.Item href="#/action-3">QLD</Dropdown.Item>
        <Dropdown.Item href="#/action-4">NT</Dropdown.Item>
        <Dropdown.Item href="#/action-5">SA</Dropdown.Item>
        <Dropdown.Item href="#/action-6">WA</Dropdown.Item>
        <Dropdown.Item href="#/action-7">TAS</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
function BreedDropdown() {
  return (
    <Dropdown>
      <Dropdown.Toggle
        style={dropdownStyle}
        variant="success"
        id="dropdown-basic"
      >
        Select Sex
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Female</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Male</Dropdown.Item>
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
