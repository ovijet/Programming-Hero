import React, { useState } from "react";

const ControlForm = () => {
  let [password, setPassword] = useState("ooo");
  let [error, setError] = useState("");
  let ControlField = (e) => {
    e.preventDefault();
    // console.log('voi');
  };
  let ControlPassword = (a) => {
    console.log(a.target.value);
    setPassword(a.target.value);
    if (password.length < 6) {
      setError("you must 6 disite er number dita hobe");
    } else {
      setError("");
    }
  };
  return (
    <div>
      <form onSubmit={ControlField}>
        <input type="text" name="name" placeholder="text" required />
        <br />
        <input
          type="password"
          onChange={ControlPassword}
          defaultValue={password}
          name="email"
          placeholder="password"
          required
        />
        <br />
        <input type="submit" value="value" />
      </form>
      <p style={{ color: "red" }}>{error}</p>
    </div>
  );
};

export default ControlForm;
