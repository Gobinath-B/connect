/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { LoginAPI } from "../api/AuthAPI";
// import connectLogo from "../assets/connectLogo.png";
import { toast } from "react-toastify";
import "./index.scss";
import Loader from "../../components/Loader";
import { Container, Paper, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { loginUser } from "../../store/action/authAction";

function LoginComponent({ handleLogin, credentails, setCredentials, navigate }) {
     return (
          <Container
               component="main"
               maxWidth="xs"
               className="flex flex-col items-center justify-center h-[100vh]"
               sx={{ mb: 4 }}>
               <Paper
                    elevation={6}
                    className="flex flex-col items-center justify-center"
                    variant="outlined"
                    sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Typography
                         component="h1"
                         variant="h4"
                         fontWeight={"500"}
                         align="left">
                         Sign in
                    </Typography>

                    <p className="sub-heading">Stay updated on your professional world</p>

                    <div className="auth-inputs flex gap-2  flex-col mt-3">
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
               </Paper>
          </Container>
     );
}

export default function Login() {
     const [loading, setLoading] = useState(false);
     let navigate = useNavigate();
     const dispatch = useDispatch();
     const [credentails, setCredentials] = useState({});
     const handleLogin = async () => {
          if (!credentails.email || !credentails.password) {
               toast.error("Please Check your Credentials");
               return;
          } else {
               navigate("/home");
          }
          // try {
          //      const body = {
          //           email: credentails.email,
          //           password: credentails.password,
          //      };
          //      console.log("BODY", body);
          //      const res = await dispatch(loginUser(body));
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
