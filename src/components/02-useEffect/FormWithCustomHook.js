import React, { useEffect } from "react";
// import { useEffect, useState } from "react";
import "./effects.css";
import useForm from "../../hooks/useForm";

const FormWithCustomHook = () => {
  const [formValues, handleInputChange] = useForm({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formValues;
  // Important Note is the useEffect is listening in changes in my doc Like the extra [] is the state is looking in and will triger anything I put inside of it when something I expecting to change change.

  //------------------------------------------------
  // lovely the email will console, becase my use efffect is listening.
  useEffect(() => {
    console.log("Email cambio");
  }, [{ email }]);

  //   //-----------------------------------------------
  //   useEffect(() => {
  //     // console.log("hey");
  //   }, []);

  //   useEffect(() => {
  //     // console.log("formState Changed");
  //   }, [formValues]);

  //   useEffect(() => {
  //     // console.log("Email Changed");
  //   }, [email]);

  //   const handleInputChange = ({ target }) => {
  //     setformState({
  //       ...formState,
  //       [target.name]: target.value,
  //     });
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    console.log(e);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>UseEffect</h1>
        <hr />
        <div className="form-group">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder=""
            autoComplete="off"
            value={name}
            onChange={handleInputChange}
          ></input>

          <input
            type="text"
            name="email"
            className="form-control"
            placeholder=""
            autoComplete="off"
            value={email}
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder=""
            autoComplete="off"
            value={password}
            onChange={handleInputChange}
          ></input>
        </div>
        <button type="submit" className="btn btn-primary" name="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default FormWithCustomHook;
