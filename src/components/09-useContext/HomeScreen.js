import React from "react";
import { useContext } from "react";
import { UserContext } from "./UserContext";

const HomeScreen = () => {
  const { user } = useContext(UserContext);

  console.log(user);
  return (
    <div>
      <h1>Home screen</h1>
      <hr />
      <pre>{JSON.stringify(user, null, 3)}</pre>
    </div>
  );
};

export default HomeScreen;

//Note here to trick is to share the information through useContext and wrap the information in my router to be able to share the information with my childrens
