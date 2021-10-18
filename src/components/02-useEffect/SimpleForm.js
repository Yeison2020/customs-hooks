import React from "react";
import { useEffect, useState } from "react";
import "./effects.css";
const SimpleForm = () => {
  const [formState, setformState] = useState({
    name: "",
    email: "",
  });
  const { name, email } = formState;
  // Important Note is the useEffect is listening in changes in my doc Like the extra [] is the state is looking in and will triger anything I put inside of it when something I expecting to change change
  useEffect(() => {
    // console.log("hey");
  }, []);

  useEffect(() => {
    // console.log("formState Changed");
  }, [formState]);

  useEffect(() => {
    // console.log("Email Changed");
  }, [email]);

  const handleInputChange = ({ target }) => {
    setformState({
      ...formState,
      [target.name]: target.value,
    });
  };
  return (
    <>
      <h1>UseEffect</h1>
      <hr />
      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Your Name"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        ></input>

        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="Your gmail@.com"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        ></input>
      </div>
    </>
  );
};

export default SimpleForm;
