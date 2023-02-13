import { useState } from "react";
import logo from "./assets/logo.svg";
import "./App.css";

function App() {

  const [reveal, setReveal] = useState(false);

  const togglePsw = () => {
    setReveal(!reveal);
  };

  // const togglePsw = () => {
  //   let x = document.getElementById("myPsw");
  //   if (x.type === "password") {
  //     x.type = "text";
  //   } else {
  //     x.type = "password";
  //   }
  // }


  return (
    <div className="App">
      <div className="maindiv_logo">
        <img src={logo} id="logo" alt="Logo" />
        <div id="main-div">
          <h2>Log in to your account</h2>
          <div id="get-started">
            <p id="para1">Don’t have an account?</p>
            <p id="para2">Get Started</p>
          </div>
          <label htmlFor="" id="email-label">
            <p id="email">Email</p>
            <input type="email" name="" id="inp-email" />
          </label>
          <div id="psw_inp-div">
            <div id="psw-div">
              <p id="psw-para">Password</p>
              <p id="forgt-psw">Forget Password</p>
            </div>
            <div id="psw-inp">
              <svg
                width="20"
                height="20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                id="hidden-psw"
                onClick={togglePsw}
              >
                <path
                  d="M12.983 10A2.98 2.98 0 0 1 10 12.983 2.98 2.98 0 0 1 7.017 10 2.98 2.98 0 0 1 10 7.017 2.98 2.98 0 0 1 12.983 10Z"
                  stroke="#65717C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M10 16.892c2.942 0 5.683-1.734 7.592-4.734.75-1.175.75-3.15 0-4.325-1.909-3-4.65-4.733-7.592-4.733-2.942 0-5.683 1.733-7.592 4.733-.75 1.175-.75 3.15 0 4.325 1.909 3 4.65 4.734 7.592 4.734Z"
                  stroke="#C1C1C1"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <input type={reveal ? "text" : "password"} name="" id="myPsw"  />
            </div>
          </div>
          <a href="https://glowing-gnome-fd582e.netlify.app/dashboard">
            <button type="submit" id="submit-btn">
              Login
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
export default App;
