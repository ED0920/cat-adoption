import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const body = {
  background: "#F9F4F1",
  color: "#444c54",
  padding: "5%",
};

const title = {
  fontFamily: "monaco",
  fontWeight: "bold",
  fontSize: "26px",
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
        <div>How to adopt:</div>
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
          <Spacer y={20} />
          <li>Meet the cats in person and find out if you bond with them.</li>
          <Spacer y={20} />
          <li>
            If all goes well, we will begin the fostering and adoption process.
          </li>
        </ol>
      </div>
      <Footer />
    </>
  );
}

export default Rehoming;
