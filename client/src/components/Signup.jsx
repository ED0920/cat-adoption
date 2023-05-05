import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import { Link } from "react-router-dom";

import Auth from "../utils/auth";
const body = {
  margin: "2%",
};

const formStyle = {
  margin: "auto",
  width: "50%",
  border: "3px solid #C89B7B",
  padding: "10px",
  lineHeight: "50px",
  borderRadius: "5px",
};
const button = {
  background: "#C89B7B",
  border: "0px",
  borderRadius: "3px",
  width: "100%",
};

const member = {
  textAlign: "center",
};
const Details = ({ info, type, name, values, onChange }) => {
  return (
    <div style={{ width: "100%" }}>
      <label style={{ width: "inherit" }}>
        {" "}
        {info}
        <input
          style={{
            width: "100%",
            height: "30px",
            // boxSizing: "border-box",
          }}
          type={type}
          name={name}
          value={values[name] || ""}
          required
          onChange={onChange}
          key={name}
        />
      </label>
    </div>
  );
};

function SignUp() {
  const [inputs, setInputs] = useState({});
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newUser = {
      firstname: inputs.firstname,
      lastname: inputs.lastname,
      email: inputs.email,
      phonenumber: inputs.phonenumber,
      password: inputs.password,
    };

    console.log(newUser);

    try {
      const { data } = await addUser({
        variables: newUser,
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div style={body}>
      <form style={formStyle} onSubmit={handleSubmit}>
        <h1 style={{ textAlign: "center" }}>Create an account</h1>
        <Details
          info={"First Name:"}
          type={"text"}
          name={"firstname"}
          values={inputs}
          onChange={handleChange}
        />
        <Details
          info={"Last Name:"}
          type={"text"}
          name={"lastname"}
          values={inputs}
          onChange={handleChange}
        />
        <Details
          info={"Phone Number:"}
          type={"tel"}
          name={"phonenumber"}
          values={inputs}
          onChange={handleChange}
        />
        <Details
          info={"Email:"}
          type={"text"}
          name={"email"}
          values={inputs}
          onChange={handleChange}
        />
        <Details
          info={"Password:"}
          type={"password"}
          name={"password"}
          values={inputs}
          onChange={handleChange}
        />
        <Details
          info={"Re-enter Password:"}
          type={"password"}
          name={"re-enterpassword"}
          values={inputs}
          onChange={handleChange}
        />

        <button style={button} type="submit">
          Create an account
        </button>
        <div style={member}>
          Already have an account? <Link to={"/login"}>Login</Link>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
