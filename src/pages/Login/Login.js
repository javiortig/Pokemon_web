import React, { useEffect, useState } from "react";
import { saveUsername } from "../../functions/storage";

const appStyle = {
  height: '250px',
  display: 'flex'
};

const userData = {
  Patrick: "yuppie",
  lDiem: "chete123",
  Shiny: "1124",
  Aurek: "Aurek",
  SiO2: "poblato98",
  Yelo: "soloparapokemonrol",
  Cristianofan99: "elbicho",
  Admin: "ubuntu"
};

const formStyle = {
  margin: 'auto',
  padding: '10px',
  border: '1px solid #c9c9c9',
  borderRadius: '5px',
  background: '#f5f5f5',
  width: '220px',
  display: 'block'
};

const labelStyle = {
  margin: '10px 0 5px 0',
  fontFamily: 'Arial, Helvetica, sans-serif',
  fontSize: '15px',
};

const inputStyle = {
  margin: '5px 0 10px 0',
  padding: '5px',
  border: '1px solid #bfbfbf',
  borderRadius: '3px',
  boxSizing: 'border-box',
  width: '100%'
};

const submitStyle = {
  margin: '10px 0 0 0',
  padding: '7px 10px',
  border: '1px solid #efffff',
  borderRadius: '3px',
  background: '#3085d6',
  width: '100%',
  fontSize: '15px',
  color: 'white',
  display: 'block'
};


const Field = React.forwardRef(({ label, type }, ref) => {
  return (
    <div>
      <label style={labelStyle} >{label}</label>
      <input ref={ref} type={type} style={inputStyle} />
    </div>
  );
});

const Form = ({ onSubmit }) => {
  const usernameRef = React.useRef();
  const passwordRef = React.useRef();
  const [e_flag, setEFlag] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      username: usernameRef.current.value,
      password: passwordRef.current.value
    };

    let temp = onSubmit(data);
    
    setEFlag(temp);
  };
  return (
    <form style={formStyle} onSubmit={handleSubmit} >
      <Field ref={usernameRef} label="Usuario:" type="text" />
      <Field ref={passwordRef} label="Contraseña:" type="password" />
      <div>
        <button style={submitStyle} type="submit">Submit</button>
      </div>
      <div>
        <p style={{color: 'red', visibility: (e_flag)? 'visible': 'hidden'}}>Usuario y/o contraseña incorrectos</p>
      </div>
    </form>
  );
};

function Login({ history }) {
  const handleSubmit = (data) => {
    let e_flag = false;
    if (data.username in userData) {
      console.log("username exists");
      if (userData[data.username] === data.password) {
        console.log("correct pass");
        saveUsername(data.username);
        history.push(`/home/`);
      }
      else {
        console.log("incorrect pass");
        e_flag = true;
      }
    }
    else {
      console.log("user does not exist");
      e_flag = true;
    }
    
      return e_flag;
  }

  return (
    <div style={appStyle}>
      <Form onSubmit={handleSubmit} />
    </div>
  );
};



export default Login;
