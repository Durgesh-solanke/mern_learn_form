import React from "react";
import "./AdddUser.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdddUser() {
  const users = {
    name: "",
    email: "",
    address: "",
  };
  const [user, setUser] = useState(users);
  const navigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setUser({ ...user, [name]: value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:5000/api/user", user)
      .then((response) => {
        // toast.success(response.data.message, { position: "top-right" });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="addUser">
      <h3>Add New User1</h3>
      <form className="addUserForm" onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={inputHandler}
            autoComplete="off"
            placeholder="Enter your name"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={inputHandler}
            autoComplete="off"
            placeholder="Enter your email"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="">password:</label>
          <input
            type="text"
            id="password"
            name="password"
            onChange={inputHandler}
            autoComplete="off"
            placeholder="Enter your Address"
          />
        </div>
        <div className="inputGroup">
          <button type="submit" className="btn btn-primary">
            submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default AdddUser;
