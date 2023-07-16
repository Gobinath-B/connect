/** @format */

import React, { useState, useMemo } from "react";
// import { postStatus, getStatus, updatePost } from "../../../api/FirestoreAPI";
// import { getCurrentTimeStamp } from "../../../helpers/useMoment";
// import { uploadPostImage } from "../../../api/ImageUpload";
import "./index.scss";

import styled from "styled-components";
import PostsCard from "../PostCard";
import ModalComponent from "../Modal";
import { useSelector } from "react-redux";

export default function PostStatus({ currentUser }) {
     const [modalOpen, setModalOpen] = useState(false);
     const user = useSelector((state) => state.user);
     const [status, setStatus] = useState("");
     const [currentPost, setCurrentPost] = useState({});
     const [isEdit, setIsEdit] = useState(false);
     const [postImage, setPostImage] = useState("");
     const [allStatuses, setAllStatus] = useState([
          {
               userID: user?.user_id,
               userEmail: "iwin@gmail.com",
               timeStamp: "May 12, 2021 , 10:30 AM ",
               postImage:
                    "data:image/png;base64,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",
               status: `<h1>Helleo</h1>`,
               comments: 0,
          },
          {
               userID: user?.user_id,
               userEmail: "iwin@gmail.com",
               timeStamp: "May 12, 2021 , 10:30 AM ",
               postImage: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
               status: `<h1>Helleo</h1>`,
               comments: 0,
          },
     ]);
     const sendStatus = async () => {
          let object = {
               userID: user?.user_id,
               userEmail: String,
               title: String,
               postImage: String,
               status: String,
               likes: Number,
          };
          // const res;
          // await postStatus(object);
          await setModalOpen(false);
          setIsEdit(false);
          await setStatus("");
     };

     const getEditData = (posts) => {
          setModalOpen(true);
          setStatus(posts?.status);
          setCurrentPost(posts);
          setIsEdit(true);
     };

     const updateStatus = () => {
          // updatePost(currentPost.id, status, postImage);
          setModalOpen(false);
     };

     useMemo(() => {
          // getStatus(setAllStatus);
     }, []);

     return (
          <div className="post-status-main">
               <div className="post-status p-2">
                    <img
                         className="post-image"
                         src={"/images/user.svg"}
                         alt="imageLink"
                    />
                    <button
                         className="open-post-modal"
                         onClick={() => {
                              setModalOpen(true);
                              setIsEdit(false);
                         }}>
                         Start a Post
                    </button>
               </div>

               <ModalComponent
                    setStatus={setStatus}
                    modalOpen={modalOpen}
                    setModalOpen={setModalOpen}
                    status={status}
                    sendStatus={sendStatus}
                    isEdit={isEdit}
                    updateStatus={updateStatus}
                    // uploadPostImage={uploadPostImage}
                    uploadPostImage={() => {}}
                    postImage={postImage}
                    setPostImage={setPostImage}
                    setCurrentPost={setCurrentPost}
                    currentPost={currentPost}
               />

               <div>
                    {allStatuses.map((posts) => {
                         return (
                              <div key={posts?.id}>
                                   <PostsCard
                                        posts={posts}
                                        getEditData={getEditData}
                                   />
                              </div>
                         );
                    })}
               </div>
          </div>
     );
}
