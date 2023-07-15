/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { LoginAPI } from "../api/AuthAPI";
// import connectLogo from "../assets/connectLogo.png";
import { toast } from "react-toastify";
import "./index.scss";
import Loader from "../../components/Loader";

function LoginComponent({ handleLogin, credentails, setCredentials, navigate }) {
     return (
          <div className="login-wrapper">
               <img
                    src={""}
                    className="connectLogo"
               />

               <div className="login-wrapper-inner">
                    <h1 className="heading">Sign in</h1>
                    <p className="sub-heading">Stay updated on your professional world</p>

                    <div className="auth-inputs">
                         <input
                              onChange={(event) => setCredentials({ ...credentails, email: event.target.value })}
                              type="email"
                              className="common-input"
                              placeholder="Email or Phone"
                         />
                         <input
                              onChange={(event) => setCredentials({ ...credentails, password: event.target.value })}
                              type="password"
                              className="common-input"
                              placeholder="Password"
                         />
                    </div>
                    <button
                         onClick={handleLogin}
                         className="login-btn">
                         Sign in
                    </button>
               </div>
               <hr
                    className="hr-text"
                    data-content="or"
               />
               <div className="google-btn-container">
                    <p className="go-to-signup">
                         New to Connect?{" "}
                         <span
                              className="join-now"
                              onClick={() => navigate("/register")}>
                              Join now
                         </span>
                    </p>
               </div>
          </div>
     );
}

export default function Login() {
     const [loading, setLoading] = useState(false);
     let navigate = useNavigate();
     const [credentails, setCredentials] = useState({});
     const handleLogin = async () => {
          toast.success("Signed in");
          // try {
          //      let res = await LoginAPI(credentails.email, credentails.password);
          //      toast.success("Signed In to Connect!");
          //      localStorage.setItem("userEmail", res.user.email);
          //      navigate("/home");
          // } catch (err) {
          //      console.log(err);
          //      toast.error("Please Check your Credentials");
          // }
     };
     useEffect(() => {
          // onAuthStateChanged(auth, (res) => {
          //      if (res?.accessToken) {
          //      } else {
          //           navigate("/home");
          //           setLoading(false);
          //      }
          // });
     }, []);
     return loading ? (
          <Loader />
     ) : (
          <LoginComponent
               handleLogin={handleLogin}
               credentails={credentails}
               setCredentials={setCredentials}
               navigate={navigate}
          />
     );
}
