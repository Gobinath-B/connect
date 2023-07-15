/** @format */

import { useNavigate } from "react-router";
import Loader from "../components/Loader";
import Topbar from "./Topbar";
import { useEffect, useState } from "react";

export default function Layout({ children }) {
     const [loading, setLoading] = useState(false);
     let navigate = useNavigate();
     const [currentUser, setCurrentUser] = useState({});

     //  useMemo(() => {
     //       getCurrentUser(setCurrentUser);
     //  }, []);
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
                         maxWidth: "60vw",
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
