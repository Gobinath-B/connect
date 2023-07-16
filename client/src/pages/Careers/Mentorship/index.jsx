/** @format */

import React from "react";
import styled from "styled-components";
import Button from "../../../components/Button";

const Mentorship = ({ data }) => {
     return (
          <ArtCard>
               <UserInfo>
                    <CardBackground />
                    <a>
                         <Photo src={data.image} />
                         <Link>{data.name}</Link>
                         <AddPhotoText>{data.title}</AddPhotoText>
                    </a>
               </UserInfo>
               <span className="flex flex-col items-center justify-center">
                    <div className="mt-3 text-[10px]">{data.connections} mutual connects</div>
                    <Button
                         title={"Connect"}
                         style={{
                              width: "80%",
                              backgroundColor: "#E2F0FE",
                              color: "blue",
                         }}
                    />
               </span>
          </ArtCard>
     );
};

const Container = styled.div`
     grid-area: leftside;
`;

const ArtCard = styled.div`
     text-align: center;
     height: 250px;
     width: 150px;
     overflow: hidden;
     margin-bottom: 8px;
     background-color: #fff;
     border-radius: 5px;
     transition: box-shadow 83ms;
     position: relative;
     border: none;
     box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const UserInfo = styled.div`
     border-bottom: 1px solid rgba(0, 0, 0, 0.15);
     padding: 12px 12px 16px;
     word-wrap: break-word;
     word-break: break-word;
`;

const CardBackground = styled.div`
     background: url("/images/card-bg.svg");
     background-position: center;
     background-size: 462px;
     height: 54px;
     margin: -12px -12px 0;
`;

const Photo = styled.img`
     box-shadow: none;
     object-fit: cover;
     width: 72px;
     height: 72px;
     box-sizing: border-box;
     background-clip: content-box;
     background-color: white;
     background-position: center;
     background-size: 60%;
     background-repeat: no-repeat;
     border: 2px solid white;
     margin: -38px auto 12px;
     border-radius: 50%;
`;

const Link = styled.div`
     font-size: 16px;
     line-height: 1.5;
     color: rgba(0, 0, 0, 0.9);
     font-weight: 600;
`;

const AddPhotoText = styled.div`
     color: #0a66c2;
     margin-top: 4px;
     font-size: 12px;
     line-height: 1.33;
     font-weight: 400;
`;

const Widget = styled.div`
     border-bottom: 1px solid rgba(0, 0, 0, 0.15);
     padding-top: 12px;
     padding-bottom: 12px;

     & > a {
          text-decoration: none;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 4px 12px;

          &:hover {
               background-color: rgba(0, 0, 0, 0.08);
          }

          div {
               display: flex;
               flex-direction: column;
               text-align: left;
               span {
                    font-size: 12px;
                    line-height: 1.333;
                    &:first-child {
                         color: rgba(0, 0, 0, 0.6);
                    }
                    &:nth-child(2) {
                         color: rgba(0, 0, 0, 1);
                    }
               }
          }
     }

     svg {
          color: rgba(0, 0, 0, 1);
     }
`;

const Item = styled.a`
     border-color: rgba(0, 0, 0, 0.8);
     text-align: left;
     padding: 12px;
     font-size: 12px;
     display: block;
     span {
          display: flex;
          align-items: center;
          color: rgba(0, 0, 0, 1);
          svg {
               color: rgba(0, 0, 0, 0.6);
          }
     }

     &:hover {
          background-color: rgba(0, 0, 0, 0.08);
     }
`;

const CommunityCard = styled(ArtCard)`
     padding: 8px 0 0;
     text-align: left;
     display: flex;
     flex-direction: column;
     a {
          color: black;
          padding: 4px 12px 4px 12px;
          font-size: 12px;

          &:hover {
               color: #0a66c2;
          }

          span {
               display: flex;
               align-items: center;
               justify-content: space-between;
          }

          &:last-child {
               color: rgba(0, 0, 0, 0.6);
               text-decoration: none;

               border-top: 1px solid #d6cec2;
               padding: 12px;
               &:hover {
                    background-color: rgba(0, 0, 0, 0.08);
               }
          }
     }
`;

export default Mentorship;
