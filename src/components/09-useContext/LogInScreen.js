import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const LogInScreen = () => {
  const { setUser } = useContext(UserContext);

  return (
    <div>
      <h1>Log In screen</h1>
      <hr />
      <button
        className="btn btn-primary"
        onClick={() =>
          setUser({
            id: 26566,
            name: " Yeison",
            email: "lotery@gmail.com",
          })
        }
      >
        Set User
      </button>
    </div>
  );
};

export default LogInScreen;
