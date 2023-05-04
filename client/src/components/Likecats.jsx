import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";

const Spacer = ({ y = 10, x = 0 }) => {
  return <div style={{ height: y, width: x }}></div>;
};

const icon = {
  float: "right",
  color: "#C89B7B",
};
const body = {
  display: "grid",
  gridTemplateRows: "1fr ",
  rowGap: 15,
  justifyContent: "center",
  background: "#F9F4F1",
};
const cardContainer = {
  display: "flex",

  padding: "10px",
  boxSizing: "border-box",
  border: "15px solid #444c54",
  color: "#444c54",
  borderRadius: "5px",
  background: "#444c54",
  minWidth: "600px",
};
const image = {
  width: "100%",
  borderRadius: "10px",
};
const details = {
  padding: "10px",
  justifyContent: "center",
  border: "3px solid #444c54",
  color: "white",
  minWidth: "300px",
};
const text = {
  fontWeight: "bold",
};

const LikedCat = ({
  name,
  state,
  age,
  sex,
  colour,
  breed,
  personality,
  imgUrl,
}) => {
  return (
    <div>
      <div style={cardContainer}>
        <img style={image} src={imgUrl} alt="cat img" />

        <div style={details}>
          <div>
            {" "}
            <b>Name:</b> {name}
          </div>
          <div>
            <b>State:</b> {state}
          </div>
          <div>
            {" "}
            <b>Age:</b> {age}
          </div>
          <div>
            <b>Sex:</b> {sex}
          </div>
          <div>
            <b>Breed:</b>
            {breed}
          </div>
          <div>
            <b>Colour:</b>
            {colour}
          </div>
          <div>
            <b>Personality:</b> {personality}{" "}
          </div>
          <Spacer />
          <div>
            <button>
              <Link to={"/contact"}>Contact Us</Link>
            </button>
            <div style={icon}>
              <FontAwesomeIcon icon={faHeartRegular} />
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

const LikeCatContainer = () => {
  const [dbData, setDbData] = useState([]);

  useEffect(() => {
    // API CALL HERE
    setDbData([
      {
        url: "https://www.adoptapet.com.au/img/animals/013Q4MQH3PWQ2RGYISN5F3ALZCGWJUHBD5.jpg",
        name: "Karen",
        state: "NSW",
        age: "6 months",
        sex: "Male",
        breed: "Short hair",
        colour: "Solid",
        personality: "Active",
      },
      {
        url: "https://www.adoptapet.com.au/img/animals/013Q4MQH3PWQ2RGYISN5F3ALZCGWJUHBD5.jpg",
        name: "Frankie",
        state: "QLD",
        age: "18 months",
        sex: "Male",
        breed: "Short hair Tabby",
        colour: "Solid",
        personality: "",
      },
    ]);
  }, []);
  return (
    <div>
      <div style={body}>
        {dbData.map((cat) => {
          return (
            <LikedCat
              name={cat.name}
              state={cat.state}
              age={cat.age}
              sex={cat.sex}
              breed={cat.breed}
              colour={cat.colour}
              personality={cat.personality}
            />
          );
        })}
      </div>
    </div>
  );
};

export default LikeCatContainer;
