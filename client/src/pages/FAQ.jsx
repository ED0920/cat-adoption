import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const body = {
  minHeight: "55vh",
  background: "#F9F4F1",
  color: "#444c54",
  padding: "5vh",
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
const Question = ({ question, answer }) => {
  return (
    <div>
      <li style={{ fontWeight: "bold" }}>{question}</li>
      <li> {answer} </li>
    </div>
  );
};

function FAQ() {
  return (
    <>
      <Header />
      <div style={body}>
        <div style={title}>Frequently Asked Question</div>
        <Spacer y={15} />
        <ul style={list}>
          <Question
            question={"Q: How does this work?"}
            answer={"A: We rehome cats who have been given up by their owners"}
          />
          <Spacer />
          <Question
            question={"Q: Are all cats up for adoption / do you sell cats?"}
            answer={
              "A: We rehome cats where they aren't happy with their current homes or their current owners are able to care for them no longer."
            }
          />
          <Spacer />
          <Question
            question={"Q: Can I surrender my cat?"}
            answer={"A:Yes, we accept surrenders."}
          />
          <Spacer />
          <Question
            question={"Q: Can you take in the stray cat/s in my neighbourhood?"}
            answer={
              "A: We do not have the facilities to provide sufficient quarantine and socialisation for strays.If they are very young kittens, most shelters would be able to take them in and have them adopted very quickly."
            }
          />
          <Spacer />
          <Question
            questions={"Q: Can I volunteer?"}
            answers={
              " A: Yes, we would not function at such a high standard without the vital assistance of its volunteers. If you would like more information about becoming a volunteer please contact us."
            }
          />
          <Spacer />
          <Question
            question={"Q: Can I become a foster carer?"}
            answer={
              "A: Yes, if you would like more information about becoming a foster carer please contact us."
            }
          />
        </ul>
      </div>
      <Footer />
    </>
  );
}

export default FAQ;
