import React, { useEffect, useState } from "react";
import "./../../../main.sass";
import ProfileCard from "../../Element/ProfileCard";
import profilepic from "../../../assets/img/profpic.svg";
import { Link, Redirect } from "react-router-dom";
import logo from "../../../assets/NextbookLogo.png";
import DashboardBanner from "../DashboardBanner";
import "./../../Element/_textInputEdged.sass";
import MainNav from "../../Element/MainNav";
import axios from "axios";
import { getCurrentDate } from "./../../../utlis";
import FloatingButton from "./../../Element/FloatingButton";

function BookOverview() {
  const [posts, setposts] = useState([]);
  const [userdata, setuserdata] = useState([]);
  const userId = localStorage.getItem("user");
  const REQUEST_USER = `/api/v1/user/${userId}`;
  let data = localStorage.getItem("key");
  //get all posts and stores them in posts
  const getPosts = async () => {
    const REQUEST_POSTS = `/api/v1/post?query={"owner":"${userId}"}&sort=-date`;
    try {
      const response = await axios.get(REQUEST_POSTS);
      setposts(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  // get user data and stores them in state userdata
  const getData = async () => {
    try {
      const response = await axios.get(REQUEST_USER);
      setuserdata(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
    getPosts();
    // eslint-disable-next-line
  }, []);
  if (data === null || data === "" || data === undefined)
    return <Redirect to="/login" />;

  axios.defaults.headers.common["Authorization"] =
    "Bearer " + localStorage.getItem("key");

  const createAllProfileCards = (posts) => {
    if (posts !== undefined || posts !== 0) {
      return posts.map((post) => (
        <ProfileCard
          link={`book/${post._id}`}
          name={post.name}
          city={post.city}
          birthDate={post.birth}
          key={post.name}
          profilPicture={post.selfie}
        />
      ));
    } else {
      return (
        <>
          <ProfileCard
            name="Du hast leider noch keine Einträge :("
            profilepic={profilepic}
          />
        </>
      );
    }
  };

  return (
    <div className="dashboard-page">
      <Link to="/home">
        <img src={logo} alt="NextBook" id="nextbookLogo" />
      </Link>
      <MainNav />
      <FloatingButton />
      <DashboardBanner
        firstName={userdata.firstName}
        lastName={userdata.lastName}
        profilPicture={userdata.img}
      />
      <main className="dashboard-wrapper">
        <div className="dashboard-content-div">
          <p className="date">{getCurrentDate(".")}</p>
          <h1>Deine Nextbook Einträge</h1>
          <div className="profil-cards">{createAllProfileCards(posts)}</div>
        </div>
      </main>
    </div>
  );
}

export default BookOverview;
