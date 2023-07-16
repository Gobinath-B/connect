/** @format */

import React, { useMemo, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Modal } from "antd";
import { BsPencil, BsTrash } from "react-icons/bs";
// import { getCurrentUser, getAllUsers, deletePost, getConnections } from "../../../api/FirestoreAPI";
import LikeButton from "../LikeButton";
import "./index.scss";
import { useSelector } from "react-redux";

export default function PostsCard({ posts, id, getEditData }) {
     let navigate = useNavigate();
     const currentUser = useSelector((state) => state.user);
     const [allUsers, setAllUsers] = useState([]);
     const [imageModal, setImageModal] = useState(false);
     const [isConnected, setIsConnected] = useState(false);
     //  useMemo(() => {
     //       getCurrentUser(setCurrentUser);
     //       getAllUsers(setAllUsers);
     //  }, []);

     useEffect(() => {
          // getConnections(currentUser.id, posts.userID, setIsConnected);
     }, [currentUser.id, posts.userID]);

     return isConnected || currentUser.id === posts.userID ? (
          <div
               className="posts-card"
               key={id}>
               <div className="post-image-wrapper">
                    {currentUser.user_id === posts.userID ? (
                         <div className="action-container">
                              <BsPencil
                                   size={20}
                                   className="action-icon"
                                   onClick={() => getEditData(posts)}
                              />
                              <BsTrash
                                   size={20}
                                   className="action-icon"
                                   onClick={() => deletePost(posts.id)}
                              />
                         </div>
                    ) : (
                         <></>
                    )}

                    <img
                         alt="profile-image"
                         className="profile-image"
                         src={allUsers.filter((item) => item.id === posts.userID).map((item) => item.imageLink)[0] ? allUsers.filter((item) => item.id === posts.userID).map((item) => item.imageLink)[0] : "/images/user.svg"}
                    />
                    <div>
                         <p
                              className="name"
                              onClick={() =>
                                   navigate("/profile", {
                                        state: { id: posts?.userID, email: posts.userEmail },
                                   })
                              }>
                              {/* {allUsers.filter((user) => user.id === posts.userID)[0]?.firstName}
                               */}
                              {currentUser.user?.firstName}
                         </p>
                         <p className="headline">{allUsers.filter((user) => user.id === posts.userID)[0]?.headline}</p>
                         <p className="timestamp">{posts.timeStamp}</p>
                    </div>
               </div>
               {posts.postImage ? (
                    <img
                         onClick={() => setImageModal(true)}
                         src={posts.postImage}
                         className="post-image"
                         alt="post-image"
                    />
               ) : (
                    <></>
               )}
               <p
                    className="status mb-3 h-[50px]"
                    dangerouslySetInnerHTML={{ __html: posts.status }}></p>

               <LikeButton
                    userId={currentUser?.id}
                    postId={posts.id}
                    currentUser={currentUser}
               />

               <Modal
                    centered
                    open={imageModal}
                    onOk={() => setImageModal(false)}
                    onCancel={() => setImageModal(false)}
                    footer={[]}>
                    <img
                         onClick={() => setImageModal(true)}
                         src={posts.postImage}
                         className="post-image modal"
                         alt="post-image"
                    />
               </Modal>
          </div>
     ) : (
          <></>
     );
}
