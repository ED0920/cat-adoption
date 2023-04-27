import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const body = {
  background: "#F9F4F1",
  color: "#444c54",
  padding: "100px",
};

const title = {
  fontFamily: "monaco",
  fontWeight: "bold",
  fontSize: "26px",
};
const list = {
  listStyle: "none",
};
const question = {
  fontWeight: "bold",
};

const Spacer = ({ y = 10, x = 0 }) => {
  return <div style={{ height: y, width: x }} />;
};

function Rehoming() {
  return (
    <>
      <Header />
      <div style={body}>
        <div style={title}>Rehoming a fur baby</div>
        <br></br>
        <div>To adopt:</div>
        <ol>
          <li>Submit an enquiry</li>
          <Spacer y={20} />
          <li>
            Introduce yourself to our foster carers:
            <ul>
              <Spacer />
              <li>What is your family like?</li>
              <li>Is your home environment suitable?</li>
              <li>Do you have any experience with cats?</li>
              <li>Do you ahve any other pets?</li>
            </ul>
          </li>

          <li>Meet the cats in person and find out if you bond with them.</li>

          <li></li>
        </ol>
      </div>
      <Footer />
    </>
  );
}

export default Rehoming;
