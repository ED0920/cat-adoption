import React from "react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";

import { useQuery } from "@apollo/client";
import { QUERY_AVAILABLE_CATS } from "../utils/queries";

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
const Spacer = ({ y = 10, x = 0 }) => {
  return <div style={{ height: y, width: x }} />;
};

const CatCard = ({ name, location, age, breed, imgUrl }) => {
  return (
    <div>
      <div style={cardContainer}>
        <img style={image} src={require(`../assets/${imgUrl}`)} alt="cat img" />
        <div style={details}>
          <div>
            <b>{name}</b>
          </div>
          <Spacer />
          <div>{age}</div>
          <Spacer />

          <div>
            {location}
          </div>
          <Spacer />
          <div>{breed}</div>
          <div style={icon}>
            <FontAwesomeIcon icon={faHeartRegular} />
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

const CatCardContainer = () => {
  const { loading, data } = useQuery(QUERY_AVAILABLE_CATS);
  const cats = data?.availableCats || [];
  const { loading, data } = useQuery(QUERY_AVAILABLE_CATS);
  const cats = data?.availableCats || [];

  return (
    <div>
      <div style={body}>
        {cats.map((cat) => {
        {cats.map((cat) => {
          return (
            <CatCard
              name={cat.name}
              location={cat.state}
              age={cat.age}
              location={cat.state}
              age={cat.age}
              breed={cat.breed}
              imgUrl={cat.imgFilename}
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
