/** @format */

import React, { useState } from "react";
// import { RegisterAPI } from "../api/AuthAPI";
// import { postUserData } from "../api/FirestoreAPI";
// import ConnectLogo from "../assets/ConnectLogo.png";
import { useNavigate } from "react-router-dom";
import "./index.scss";
// import { getUniqueID } from "../helpers/getUniqueId";

import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import Checkout from "../../components/StepperForm";
import StepperForm from "../../components/StepperForm";

export default function Register() {
     let navigate = useNavigate();
     const [credentials, setCredentials] = useState({});
     const dispatch = useDispatch();
     const handleRegister = async () => {
          try {
               //  let res = await RegisterAPI(credentails.email, credentails.password);
               //  toast.success("Account Created!");
               //  await dispatch;
               navigate("/home");
               // localStorage.setItem("userEmail", res.user.email);
          } catch (err) {
               console.log(err);
               toast.error("Cannot Create your Account");
          }
     };

     return (
          // <div className="login-wrapper">
          //      {/* <img src={ConnectLogo} className="ConnectLogo" /> */}

          //      <div className="login-wrapper-inner">
          //           <h1 className="heading">Make the most of your professional life</h1>

          //           <div className="auth-inputs">
          //                <input
          //                     onChange={(event) => setCredentials({ ...credentails, name: event.target.value })}
          //                     type="text"
          //                     className="common-input"
          //                     placeholder="Your Name"
          //                />
          //                <input
          //                     onChange={(event) => setCredentials({ ...credentails, email: event.target.value })}
          //                     type="email"
          //                     className="common-input"
          //                     placeholder="Email or phone number"
          //                />
          //                <input
          //                     onChange={(event) => setCredentials({ ...credentails, password: event.target.value })}
          //                     type="password"
          //                     className="common-input"
          //                     placeholder="Password (6 or more characters)"
          //                />
          //           </div>
          //           <button
          //                onClick={handleRegister}
          //                className="login-btn">
          //                Agree & Join
          //           </button>
          //      </div>
          //      <hr
          //           class="hr-text"
          //           data-content="or"
          //      />
          //      <div className="google-btn-container">
          //           <p className="go-to-signup">
          //                Already on Connect?{" "}
          //                <span
          //                     className="join-now"
          //                     onClick={() => navigate("/")}>
          //                     Sign in
          //                </span>
          //           </p>
          //      </div>
          // </div>
          <div className="flex h-[100vh] items-center justify-center">
               <StepperForm
                    credentials={credentials}
                    setCredentials={setCredentials}
                    handleSubmit={handleRegister}
               />
          </div>
     );
}
