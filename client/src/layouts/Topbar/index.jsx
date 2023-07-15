/** @format */

import React, { useEffect, useState } from "react";
// import ConnectLogo from "../../../assets/ConnectLogo.png";
// import user from "../../../assets/user.png";
import { AiOutlineHome, AiOutlineUserSwitch, AiOutlineSearch, AiOutlineMessage, AiOutlineBell } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
import { BsBriefcase } from "react-icons/bs";
import "./index.scss";
// import Search from "../../components/Search";
import ProfilePopup from "../../components/ProfilePopup";
import { styled } from "styled-components";
import HomeIcon from "../../assets/icons/HomeIcon";
import WorkIcon from "../../assets/icons/WorkIcon";

const navItems = [
     {
          title: "Home",
          icon: <HomeIcon />,
          to: "/home",
     },
     {
          title: "Careers",
          icon: <HomeIcon />,
          to: "/careers",
     },
     {
          title: "Finance",
          icon: <HomeIcon />,
          to: "/finance",
     },
     {
          title: "Chats",
          icon: <HomeIcon />,
          to: "/chats",
     },
     {
          title: "Emergeny",
          icon: <HomeIcon />,
          to: "/emergency",
     },
];

export default function Topbar({ currentUser }) {
     const [popupVisible, setPopupVisible] = useState(false);
     const [isSearch, setIsSearch] = useState(false);
     const [users, setUsers] = useState([]);
     const [filteredUsers, setFilteredUsers] = useState([]);
     const [searchInput, setSearchInput] = useState("");
     let navigate = useNavigate();
     const location = useLocation();
     const goToRoute = (route) => {
          navigate(route);
     };

     const displayPopup = () => {
          setPopupVisible(!popupVisible);
     };

     const openUser = (user) => {
          navigate("/profile", {
               state: {
                    id: user.id,
                    email: user.email,
               },
          });
     };

     const handleSearch = () => {
          if (searchInput !== "") {
               let searched = users.filter((user) => {
                    return Object.values(user).join("").toLowerCase().includes(searchInput.toLowerCase());
               });

               setFilteredUsers(searched);
          } else {
               setFilteredUsers(users);
          }
     };

     useEffect(() => {
          let debounced = setTimeout(() => {
               handleSearch();
          }, 1000);

          return () => clearTimeout(debounced);
     }, [searchInput]);

     useEffect(() => {
          // getAllUsers(setUsers);
     }, []);
     return (
          <Container>
               <Content>
                    <Logo>
                         <a href="/home">
                              <img
                                   style={{
                                        width: "60px",
                                        marginRight: "10px",
                                   }}
                                   src="/images/logo.png"
                                   alt=""
                              />
                         </a>
                    </Logo>
                    <Search>
                         <div>
                              <input
                                   type="text"
                                   placeholder="Search"
                              />
                         </div>
                         <SearchIcon>
                              <img
                                   src="/images/search-icon.svg"
                                   alt=""
                              />
                         </SearchIcon>
                    </Search>
                    <Nav>
                         <NavListWrap>
                              {navItems.map((item, index) => (
                                   <NavList className={location.pathname === item.to ? "active" : ""}>
                                        <a onClick={() => goToRoute(item.to)}>
                                             {item.icon}
                                             <span>{item.title}</span>
                                        </a>
                                   </NavList>
                              ))}

                              <User onClick={() => openUser({})}>
                                   <a>
                                        <img
                                             src="/images/user.svg"
                                             alt=""
                                        />
                                        <span>
                                             Me
                                             <img
                                                  src="/images/down-icon.svg"
                                                  alt=""
                                             />
                                        </span>
                                   </a>

                                   <SignOut>
                                        <a>Sign Out</a>
                                   </SignOut>
                              </User>

                              <Work>
                                   <a>
                                        <img
                                             src="/images/nav-work.svg"
                                             alt=""
                                        />
                                        <span>
                                             Work
                                             <img
                                                  src="/images/down-icon.svg"
                                                  alt=""
                                             />
                                        </span>
                                   </a>
                              </Work>
                         </NavListWrap>
                    </Nav>
               </Content>
          </Container>
     );
}

const Container = styled.div`
     background-color: white;
     border-bottom: 1px solid rgba(0, 0, 0, 0.08);
     width: 100vw;
     height: 56px;
     z-index: 100;
`;

const Content = styled.div`
     display: flex;
     align-items: center;
     margin: 0 auto;
     height: 100%;
     max-width: 1128px;
`;

const Logo = styled.span`
     margin-right: 8px;
     font-size: 0px;
`;

const Search = styled.div`
     opacity: 1;
     flex-grow: 1;
     position: relative;
     & > div {
          max-width: 280px;
          input {
               border: none;
               box-shadow: none;
               background-color: #eef3f8;
               border-radius: 2px;
               color: rgba(0, 0, 0, 0.9);
               width: 218px;
               padding: 0 8px 0 40px;
               line-height: 1.75;
               font-weight: 400;
               font-size: 14px;
               height: 34px;
               border-color: #dce6f1;
               vertical-align: text-top;
          }
     }
`;

const SearchIcon = styled.div`
     width: 40px;
     position: absolute;
     z-index: 1;
     top: 10px;
     left: 2px;
     border-radius: 0 2px 2px 0;
     margin: 0;
     pointer-events: none;
     display: flex;
     justify-content: center;
     align-items: center;
`;

const Nav = styled.nav`
     margin-left: auto;
     display: block;
     @media (max-width: 768px) {
          position: fixed;
          left: 0;
          bottom: 0;
          background: white;
          width: 100%;
     }
`;

const NavListWrap = styled.ul`
     display: flex;
     flex-wrap: nowrap;
     list-style-type: none;

     .active {
          span:after {
               content: "";
               transform: scaleX(1);
               border-bottom: 2px solid var(--white, #fff);
               bottom: 0;
               left: 0;
               position: absolute;
               transition: transform 0.2s ease-in-out;
               width: 100%;
               border-color: rgba(0, 0, 0, 0.9);
          }
     }
`;

const NavList = styled.li`
     display: flex;
     align-items: center;
     a {
          align-items: center;
          background: transparent;
          display: flex;
          flex-direction: column;
          font-size: 12px;
          font-weight: 400;
          justify-content: center;
          line-height: 1.5;
          min-height: 52px;
          min-width: 80px;
          position: relative;
          text-decoration: none;

          span {
               color: rgba(0, 0, 0, 0.6);
               display: flex;
               align-items: center;
          }

          @media (max-width: 768px) {
               min-width: 70px;
          }
     }

     &:hover,
     &:active {
          a {
               span {
                    color: rgba(0, 0, 0, 0.9);
               }
          }
     }
`;

const SignOut = styled.div`
     position: absolute;
     top: 7%;
     background: white;
     border-radius: 0 0 5px 5px;
     width: 100px;
     height: 40px;
     font-size: 16px;
     transition-duration: 167ms;
     text-align: center;
     display: none;
`;

const User = styled(NavList)`
     a > svg {
          width: 24px;
          border-radius: 50%;
     }

     a > img {
          width: 24px;
          height: 24px;
          border-radius: 50%;
     }

     span {
          display: flex;
          align-items: center;
     }

     &:hover {
          ${SignOut} {
               align-items: center;
               display: flex;
               justify-content: center;
          }
     }
`;

const Work = styled(User)`
     border-left: 1px solid rgba(0, 0, 0, 0.08);
`;
