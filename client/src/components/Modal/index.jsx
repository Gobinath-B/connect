/** @format */

import React, { useState } from "react";
import { Button, Modal, Progress } from "antd";
import { AiOutlinePicture } from "react-icons/ai";
import "./index.scss";
import ReactQuill from "react-quill";

const ModalComponent = ({ modalOpen, setModalOpen, sendStatus, setStatus, status, isEdit, updateStatus, uploadPostImage, setPostImage, postImage, currentPost, setCurrentPost }) => {
     const [progress, setProgress] = useState(0);
     const [image, setImage] = useState(null);
     return (
          <>
               <Modal
                    title="Create a post"
                    centered
                    open={modalOpen}
                    onOk={() => {
                         setStatus("");
                         setModalOpen(false);
                         setPostImage("");
                         setCurrentPost({});
                    }}
                    onCancel={() => {
                         setStatus("");
                         setModalOpen(false);
                         setPostImage("");
                         setCurrentPost({});
                         setImage(null);
                    }}
                    footer={[
                         <Button
                              onClick={isEdit ? updateStatus : sendStatus}
                              key="submit"
                              type="primary"
                              disabled={status.length > 0 ? false : true}>
                              {isEdit ? "Update" : "Post"}
                         </Button>,
                    ]}>
                    <div className="posts-body">
                         <ReactQuill
                              className="modal-input"
                              theme="snow"
                              value={status}
                              placeholder="Share Something Useful.."
                              onChange={setStatus}
                         />
                         {progress === 0 || progress === 100 ? (
                              <></>
                         ) : (
                              <div className="progress-bar">
                                   <Progress
                                        type="circle"
                                        percent={progress}
                                   />
                              </div>
                         )}
                         {postImage?.length > 0 || currentPost?.postImage?.length ? (
                              <img
                                   className="preview-image"
                                   src={postImage || currentPost?.postImage}
                                   alt="postImage"
                              />
                         ) : (
                              <></>
                         )}
                    </div>
                    <label for="pic-upload">
                         <AiOutlinePicture
                              size={35}
                              className="picture-icon"
                         />
                    </label>
                    <input
                         id="pic-upload"
                         type={"file"}
                         hidden
                         onChange={(e) => {
                              setImage(e.target.files[0]);
                              uploadPostImage(image, setPostImage, setProgress);
                         }}
                         //  onChange={(event) => uploadPostImage(event.target.files[0], setPostImage, setProgress)}
                    />
                    {image !== null ? (
                         <div
                              style={{
                                   height: "250px",
                              }}>
                              <img
                                   style={{ width: "100%", height: "100%", borderRadius: "8px", objectFit: "cover" }}
                                   src={URL.createObjectURL(image)}
                              />
                         </div>
                    ) : (
                         <></>
                    )}
               </Modal>
          </>
     );
};

export default ModalComponent;
