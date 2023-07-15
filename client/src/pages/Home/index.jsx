/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topbar from "../../layouts/Topbar";
import Loader from "../../components/Loader";
import PostStatus from "../../components/PostStatus";
import Layout from "../../layouts";
import LeftSidebar from "../../components/LeftSidebar";

export const Home = ({ currentUser }) => {
     return (
          <Layout>
               {/* <LeftSidebar /> */}
               <PostStatus currentUser={currentUser} />
          </Layout>
     );
};
