import React, { useState } from "react";
import "../asset/styles/register.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [experience, setExperience] = useState("");
  const [level, setLevel] = useState("");


  console.log(email);


  return (
    <div className="register-form">
      <h1>Registrasi</h1>
      <form>
      <div className="form-group">
          <label>Username</label>
          <input
            type="username"
            class="form-control"
            aria-describedby="usernameHelp"
            placeholder="ahmadrizky24"
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            class="form-control"
            aria-describedby="emailHelp"
            placeholder="ahmadrizky@gmail.com"
          />
        </div>
        <div class="form-group">
          <label>Experience</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Your Experience"
          />
        </div>
        <div class="form-group">
          <label>Level</label>
          <input
            type="text"
            class="form-control"
            placeholder="1-10"
          />
        </div>
        <button type="submit" class="btn btn-primary ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;