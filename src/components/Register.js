import React from "react";
import { useState } from "react";
import { register } from "../client/auth";
import { UserModel } from "../models/user-model";
import { parseJwt, saveUserToStorage } from "../utils/helpers";

const Register = () => {
  const [fname, setFname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleClick() {
    const um = new UserModel({
      firstName: fname,
      lastName: lname,
      email,
      password,
    });
    const token = await register(um);
    if (token) {      
      // save token to localstorage
      saveUserToStorage(token)      

      alert(`New user created.`)
    }
  }

  return (
    <div style={{padding: '5%'}}>
      <label> first name </label>
      <input
        value={fname}
        onChange={(e) => {
          setFname(e.target.value);
        }}
      />
      <br />
      <label> last name </label>
      <input
        value={lname}
        onChange={(e) => {
          setlname(e.target.value);
        }}
      />
      <br />
      <label> email </label>
      <input
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br />
      <label> password </label>
      <input
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <br />
      <button onClick={handleClick}> Register </button>
    </div>
  );
};

export default Register;
