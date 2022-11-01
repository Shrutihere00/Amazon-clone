import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase.js";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => navigate("/"))
      .catch((error) => alert(error.message));
  };
  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => console.log(auth))
      .catch((error) => alert(error.message));
    if (auth) {
      navigate("/");
    }
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form action="">
          <h5>E-mail</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name=""
            id=""
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name=""
            id=""
          />
          <button
            type="submit"
            className="login__signInButton"
            onClick={signIn}
          >
            Sign In
          </button>
        </form>
        <p>
          by Signing-in falan damkana Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Nostrum, reiciendis hic perspiciatis fuga nulla odio
          impedit praesentium sed inventore aspernatur eos iste ea. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Minus obcaecati totam
          maxime voluptate reprehenderit beatae veritatis rem aliquam quos quae,
          vitae alias ipsa!
        </p>
        <button onClick={register} className="login__registerButton">
          Create your amazon account
        </button>
      </div>
    </div>
  );
};

export default Login;
//FIRE BASE INSTALL
//npm install firbase
//GLOBAL INSTALL OF FIREBASE TOOLS
//npm install -g firebase-tools
