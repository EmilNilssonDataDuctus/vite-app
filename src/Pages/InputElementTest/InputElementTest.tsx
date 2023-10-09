import React, { useEffect, useState } from "react";
import { MainWrapper } from "../../Shared/Page.styled";

const styles = {
  display: "block",
};

export const InputElementTest = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [hackedUsername, setHackedUsername] = useState("");
  const [hackedPassword, setHackedPassword] = useState("");
  const handleChange = (e) => {
    const id = e.target.id;
    switch (id) {
      case "username":
        setUsername(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;

      default:
        break;
    }
  };

  useEffect(() => {

    setHackedUsername(document.getElementById("username")!.value)
    setHackedPassword(document.getElementById("password")!.value)
  }, [username, password]);
  return (
    <MainWrapper>
      <h1>InputElementTest</h1>
      <form>
        <label style={styles}>
          username
          <input
            id="username"
            value={username}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label style={styles}>
          password
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => handleChange(e)}
          />
        </label>
      </form>
      <p>Hacked information</p>
      <p id="username-hacked">Username: {hackedUsername && hackedUsername}</p>
      <p id="password-hacked">Password: {hackedPassword && hackedPassword}</p>
    </MainWrapper>
  );
};
