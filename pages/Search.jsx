import React, { useState } from "react";
import "../asset/styles/search.css";

const Search = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");

  console.log(email);


  return (
    <div className="register-form">
      <h1>Search</h1>
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

export default Search;