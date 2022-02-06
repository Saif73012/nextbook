import React, { useState, useEffect } from "react";
import DashboardBanner from "./DashboardBanner";
import "../../main.sass";
import logo from "../../assets/NextbookLogo.png";
import profilepic from "../../assets/img/profpic.svg";
import { Link, Redirect } from "react-router-dom";
import ProfileCard from "../Element/ProfileCard";
import MainNav from "../Element/MainNav";
import FloatingButton from "../Element/FloatingButton";
import axios from "axios";
import { getCurrentDate } from "./../../utlis";

function DashboardPage() {
  const [userdata, setuserdata] = useState([]);
  const [posts, setposts] = useState([]);
  const userId = localStorage.getItem("user");
  const REQUEST_USER = `/api/v1/user/${userId}`;
  const REQUEST_POSTS = `/api/v1/post?query={"owner":"${userId}"}&sort=-date`;
  axios.defaults.headers.common["Authorization"] =
    "Bearer " + localStorage.getItem("key");
  // get user data and stores them in state userdata
  const getData = async () => {
    try {
      const response = await axios.get(REQUEST_USER);
      setuserdata(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  //get all posts and stores them in posts
  const getPosts = async () => {
    try {
      const response = await axios.get(REQUEST_POSTS);
      setposts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
    getPosts();
    // eslint-disable-next-line
  }, []);
  //redirect if not loggin
  let data = localStorage.getItem("key");
  if (data === null || data === "" || data === undefined)
    return <Redirect to="/login" />;

  // get the total entries
  const getEntries = (userdata) => {
    const posts = userdata.posts;
    if (posts === undefined) return "Du hast noch keine Einträge :(";
    else if (userdata.posts.length === 0)
      return "Du hast noch keine Einträge :(";
    else return userdata.posts.length;
  };

  //get the 4 latest posts and return profilcard
  const createProfileCards = (posts) => {
    let arrOfPosts = [];
    if (posts !== undefined && posts.length !== 0 && posts.length >= 4) {
      for (let i = 0; i <= 3; i++) {
        arrOfPosts.push(posts[i]);
      }
      if (posts !== undefined)
        return arrOfPosts.map((post) => (
          <ProfileCard
            name={post.name}
            link={`book/${post._id}`}
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
            name="Du hast leider noch keine 4 Einträge"
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
      <main className="dashboard-wrapper">
        <DashboardBanner
          firstName={userdata.firstName}
          lastName={userdata.lastName}
          profilPicture={userdata.img}
        />
        <div className="dashboard-content-div">
          <p className="date">{getCurrentDate(".")}</p>
          <h1>
            Anzahl deiner Einträge <br />
            <strong className="red">{getEntries(userdata)}</strong>
          </h1>
          <h2>Hier sind deine letzten 4 Einträge</h2>

          <div className="profil-cards">{createProfileCards(posts)}</div>

          {/*  <div className="content-pair">
            <container>
              <h3>Alter im Durchschnitt</h3>
              <p id="text">23.4</p>
            </container>
            <container>
              <h3>Geschlecht</h3>
              <div className="charts">
                <span>Männlich</span>
                <div
                  className="charts__chart chart--p52 chart--blue chart--xl"
                  data-percent
                ></div>
                <span>Weiblich</span>
                <div
                  className="charts__chart chart--p45 chart--yellow chart--xl"
                  data-percent
                ></div>
                <span>Keine Angabe</span>
                <div
                  className="charts__chart chart--p8 chart--grey chart--xl"
                  data-percent
                ></div>
              </div>
            </container>
          </div>

          <div className="content-pair">
            <container>
              <h3>Lieblingsfarbe</h3>
              <div className="charts">
                <div
                  className="charts__chart chart--p30 chart--grey chart--xl"
                  data-percent
                ></div>
                <div
                  className="charts__chart chart--p25 chart--yellow chart--xl"
                  data-percent
                ></div>
                <div
                  className="charts__chart chart--p25 chart--red chart--xl"
                  data-percent
                ></div>
                <div
                  className="charts__chart chart--p20 chart--blue chart--xl"
                  data-percent
                ></div>
              </div>
            </container>
            <container>
              <h3>Haarfarbe</h3>
              <div className="charts">
                <div
                  className="charts__chart chart--p70 chart--grey  chart--xl"
                  data-percent
                ></div>
                <div
                  className="charts__chart chart--p10 chart--yellow chart--xl"
                  data-percent
                ></div>
                <div
                  className="charts__chart chart--p25 chart--brown chart--xl"
                  data-percent
                ></div>
              </div>
            </container>
          </div>

          <div className="content-pair">
            <container>
              <h3>Wohnort</h3>
              <div className="charts">
                <span>Berlin</span>
                <div className="charts__chart chart--p52 chart--red chart--xl"></div>
                <span>München</span>
                <div className="charts__chart chart--p45 chart--yellow chart--xl"></div>
                <span>Frankfurt</span>
                <div className="charts__chart chart--p8 chart--blue chart--xl"></div>
                <span>Hamburg</span>
                <div className="charts__chart chart--p19 chart--green chart--xl"></div>
              </div>
            </container>
            <container>
              <h3>Körpergröße</h3>
              <p id="text">1,78m</p>
            </container>
  </div> */}
        </div>
      </main>
    </div>
  );
}

export default DashboardPage;
