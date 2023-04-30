import { useState } from 'react';

const body = {
    margin: "2%"
}

const formStyle = {
    margin: "auto",
    width: "50%",
    border: "3px solid #C89B7B",
    padding: "10px",
    lineHeight: "50px",
    borderRadius: "5px"

}
const Button = {
    height: '30px',
    background: "#C89B7B",
    border: "0px",
    borderRadius: "3px",
    width: '100%'
}

const Details = ({ info, type, name, values, onChange }) => {
    return (
        <div >
            <label> {info}
                <input style={{
                    width: '100%',
                    height: '30px',
                    display: "flex",
                    boxSizing: 'border-box',
                }}
                    type={type}
                    name={name}
                    value={values[name] || ""}
                    required
                    onChange={onChange}
                    key={name}
                />
            </label>

        </div >
    )
}

function SignUp() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))

    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
    }


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
                    type={"integer"}
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
                    type={"text"}
                    name={"password"}
                    values={inputs}
                    onChange={handleChange}
                />
                <Details
                    info={"Re-enter Password:"}
                    type={"text"}
                    name={"re-enterpassword"}
                    values={inputs}
                    onChange={handleChange}
                />

                <button style={Button} type="submit">Create an account</button>

            </form >
        </div >
    )

}

export default SignUp