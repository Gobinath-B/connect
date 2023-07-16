/** @format */

import { useNavigate } from "react-router";
import Loader from "../components/Loader";
import Topbar from "./Topbar";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Layout({ children }) {
     const [loading, setLoading] = useState(false);
     let navigate = useNavigate();
     const currentUser = useSelector((state) => state.user);

     // useMemo(() => {
     //      getCurrentUser(setCurrentUser);
     // }, []);
     useEffect(() => {
          // onAuthStateChanged(auth, (res) => {
          //      if (!res?.accessToken) {
          //           setLoading(false);
          //      } else {
          //           navigate("/");
          //      }
          // });
     }, []);
     return loading ? (
          <Loader />
     ) : (
          <>
               <Topbar currentUser={currentUser} />
               <div
                    style={{
                         padding: "20px",
                         maxWidth: "70vw",
                         margin: "auto",
                         display: "flex",
                         flexDirection: "row",
                         height: "100vh",
                         gap: "20px",
                    }}>
                    {children}
               </div>{" "}
          </>
     );
}
