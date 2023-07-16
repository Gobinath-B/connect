/** @format */

import React, { useState } from "react";
// import { RegisterAPI } from "../api/AuthAPI";
// import { postUserData } from "../api/FirestoreAPI";
// import ConnectLogo from "../assets/ConnectLogo.png";
import { useNavigate } from "react-router-dom";
import "./index.scss";
// import { getUniqueID } from "../helpers/getUniqueId";

import { useDispatch } from "react-redux";
import Checkout from "../../components/StepperForm";
import StepperForm from "../../components/StepperForm";
import { registerUser } from "../../store/action/authAction";
import { toast } from "react-hot-toast";

export default function Register() {
     let navigate = useNavigate();
     const [credentials, setCredentials] = useState({});
     const dispatch = useDispatch();
     const handleRegister = async () => {
          console.log(credentials);
          try {
               const body = {
                    companyName: credentials?.currentRole === "student" ? null : credentials.companyName,
                    currentJob: credentials?.currentRole === "student" ? null : credentials.currentJob,
                    ...credentials,
               };
               const res = await dispatch(registerUser(body));

               localStorage.setItem("userEmail", res.email);
               navigate("/home");
          } catch (err) {
               console.log(err);
               toast.error("Cannot Create your Account");
          }
     };

     return (
          <div className="flex h-[100vh] items-center justify-center">
               <StepperForm
                    credentials={credentials}
                    setCredentials={setCredentials}
                    handleSubmit={handleRegister}
               />
          </div>
     );
}
