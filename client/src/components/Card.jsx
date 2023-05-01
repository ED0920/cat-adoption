import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

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

const CatCard = ({ name, location, age, dob, breed, imgUrl }) => {
  return (
    <div>
      <div style={cardContainer}>
        <img style={image} src={imgUrl} alt="cat img" />
        <div style={details}>
          <div>
            <b>{name}</b>
          </div>
          <Spacer />
          <div>{location}</div>
          <Spacer />
          <div>{age}</div>
          <Spacer />
          <div>{dob}</div>
          <Spacer />
          <div>{breed}</div>
          <div style={icon}>
            <FontAwesomeIcon icon={faHeart} />
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

const CatCardContainer = () => {
  const [dbData, setDbData] = useState([]);

  useEffect(() => {
    // API CALL HERE
    setDbData([
      {
        url: "https://www.adoptapet.com.au/img/animals/013Q4MQH3PWQ2RGYISN5F3ALZCGWJUHBD5.jpg",
        name: "Jason",
        location: "NSW",
        dob: "1 year",
        breed: "Short Hair Tabby",
      },
      {
        url: "https://www.adoptapet.com.au/img/animals/013Q4MQH3PWQ2RGYISN5F3ALZCGWJUHBD5.jpg",
        name: "Jason",
        location: "QLD",
      },
      {
        url: "https://www.adoptapet.com.au/img/animals/013Q4MQH3PWQ2RGYISN5F3ALZCGWJUHBD5.jpg",
        name: "Jackson",
        location: "NT",
      },
    ]);
  }, []);

  return (
    <div>
      <div style={body}>
        {dbData.map((cat) => {
          return (
            <CatCard name={cat.name} location={cat.location} imgUrl={cat.url} />
          );
        })}
      </div>
    </div>
  );
};

export default CatCardContainer;
export { CatCard };
