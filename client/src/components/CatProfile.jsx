import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

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
  return (
    <div>
      <div style={cardContainer}>
        <img style={image} src={imgUrl} alt="cat img" />
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
          <div>
            <Link to={"/login"}>
              <b style={link}>Login to enquire now</b>
            </Link>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

const CatProfile = () => {
  const [dbData, setDbData] = useState([]);
  const { id } = useParams();
  console.log(id);

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
        bio: "My name is Karen and I love to play with my string toys. I like lots of pats, cuddle and napping on beds",
      },
    ]);
  }, []);
  return (
    <div>
      <div style={body}>
        {dbData.map((cat) => {
          return (
            <Cat
              name={cat.name}
              state={cat.state}
              age={cat.age}
              sex={cat.sex}
              breed={cat.breed}
              colour={cat.colour}
              personality={cat.personality}
              bio={cat.bio}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CatProfile;
