import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRememberChange = (event) => {
    setRemember(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitting login with:", { username, password, remember });
    setUsername("");
    setPassword("");
    setRemember(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username-input">Username:</label>
        <input type="text" id="username-input" value={username} onChange={handleUsernameChange} />
      </div>
      <div>
        <label htmlFor="password-input">Password:</label>
        <input type="password" id="password-input" value={password} onChange={handlePasswordChange} />
      </div>
      <div>
        <label htmlFor="remember-checkbox">Remember me:</label>
        <input type="checkbox" id="remember-checkbox" checked={remember} onChange={handleRememberChange} />
      </div>
      <button type="submit">Log in</button>
    </form>
  );
};

export default Login;