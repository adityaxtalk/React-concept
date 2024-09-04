import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./store/auth";
const Authentication = () => {
  const authState = useSelector((store) => store.auth);
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    if (name.length === 0) {
      alert("Name is required");
      return;
    }
    if (password.length === 0 || confirmPassword === 0) {
      alert("password or confirm password is required");
      return;
    }

    if (password !== confirmPassword) {
      alert("Password and confirm password doesn't matched");
      return;
    }

    // Make an api call
    
    dispatch(login());
  };

  const logOut = () => {
    dispatch(logout());
  };
  return (
    <>
      {authState.isAuthentication ? (
        <>
          <h1>Hello User</h1>
          <button onClick={logOut}> logout</button>
        </>
      ) : (
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="username"
            id="name"
            value={name}
            placeholder="Enter Username"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={confirmPassword}
            placeholder="Enter Confirm password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button>Submit</button>
        </form>
      )}
    </>
  );
};

export default Authentication;
