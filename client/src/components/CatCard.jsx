import React, { useState } from "react";
import { Link } from "react-router-dom";

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

// Variable to hold the search state

const searchState = { location: "Any", sex: "Any"};

const updateSearchState = (key, value) => {
  if ( key === "state" ) {
    searchState.location = value;
  } else if ( key === "sex" ) {
    searchState.sex = value;
  }

  console.log ("location: " + searchState.location + " sex: " + searchState.sex);
}

const getSearchState = (key) => {
  if( key === "state" )
  {
    if ( searchState.location === "Any") {
      return null;
    }

    return searchState.location;
  }

  if( key === "sex" )
  {
    if ( searchState.sex === "Any") {
      return null;
    }

    return searchState.sex;
  }

  return null;
}

const getSearchTerm = (key) => {
  if( key === "state" )
  {
    if ( searchState.location === "Any") {
      return ['NSW', 'Vic', 'Qld', 'SA', 'WA', 'Tas', 'NT', 'ACT'];
    } 

    return [searchState.location];
  }

  if( key === "sex" )
  {
    if ( searchState.sex === "Any") {
      return ['Male', 'Female'];
    } 

    return [searchState.sex];
  }

  // This shouldn't happen
  return [];

}

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
  let lastKnownState = getSearchState("state");

  return (
    <Dropdown
      onSelect={(eventKey, event) => {
        console.log(eventKey);
        setState(eventKey);
        updateSearchState("state", eventKey);
      }}
    >
      <Dropdown.Toggle
        style={dropdownStyle}
        variant="success"
        id="dropdown-basic"
      >
        {state || lastKnownState || "Select State"}
      </Dropdown.Toggle>

      {/* 'NSW', 'Vic', 'Qld', 'SA', 'WA', 'Tas', 'NT', 'ACT' */}
      <Dropdown.Menu>
        <Dropdown.Item eventKey={"Any"}>Any</Dropdown.Item>
        <Dropdown.Item eventKey={"NSW"}>NSW</Dropdown.Item>
        <Dropdown.Item eventKey={"Vic"}>VIC</Dropdown.Item>
        <Dropdown.Item eventKey={"Qld"}>QLD</Dropdown.Item>
        <Dropdown.Item eventKey={"SA"}>SA</Dropdown.Item>
        <Dropdown.Item eventKey={"WA"}>WA</Dropdown.Item>
        <Dropdown.Item eventKey={"Tas"}>TAS</Dropdown.Item>
        <Dropdown.Item eventKey={"NT"}>NT</Dropdown.Item>
        <Dropdown.Item eventKey={"ACT"}>ACT</Dropdown.Item>  
      </Dropdown.Menu>
    </Dropdown>
  );
}

function SexDropdown() {
  const [sex, setSex] = useState("");
  let lastKnownSex = getSearchState("sex");

  return (
    <Dropdown
      onSelect={(eventKey, event) => {
        console.log(eventKey);
        setSex(eventKey);
        updateSearchState("sex", eventKey);
      }}
    >
      <Dropdown.Toggle
        style={dropdownStyle}
        variant="success"
        id="dropdown-basic"
      >
        {sex || lastKnownSex || "Select Sex"}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item eventKey={"Any"}>Any</Dropdown.Item>
        <Dropdown.Item eventKey={"Female"}>Female</Dropdown.Item>
        <Dropdown.Item eventKey={"Male"}>Male</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}



const CatCardContainer = () => {

  const [searchUpdated, setSearchUpdated] = useState(0);

  const handleFilter = () => {
    setSearchUpdated(searchUpdated + 1);
  }

  // Get the search state
  const statesToSearch = getSearchTerm("state");
  const sexesToSearch = getSearchTerm("sex");

  console.log(statesToSearch);
  console.log(sexesToSearch);


  let { loading, data } = useQuery(QUERY_AVAILABLE_CATS, {
    variables: { state: statesToSearch, sex: sexesToSearch},
  });
  let cats = data?.availableCats || [];

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
          <SexDropdown />
        </div>
        <button style={search} onClick={handleFilter}>Search</button>
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
