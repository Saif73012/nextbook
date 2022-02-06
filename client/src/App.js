import React from "react";
import "./main.sass";
import LandingPage from "./component/Page/LandingPage";
import LoginPage from "./component/Page/LoginPage";
import RegisterPage from "./component/Page/RegisterPage";
import GuestPage from "./component/Page/GuestPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DashboardPage from "./component/Page/DashboardPage";
import Settings from "./component/Page/Settings";
import BookPage from "./component/Page/dashboard/BookPage";
import BookOverview from "./component/Page/dashboard/BookOverview";
import AboutPage from "./component/Page/AboutPage";

function App() {
  return [
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/home" component={DashboardPage} />
        <Route path="/settings" component={Settings} />
        <Route path="/books" component={BookOverview} />
        <Route path="/book/:id" component={BookPage} />
        <Route path="/logout" component={DashboardPage} />
        <Route path="/guest" component={GuestPage} />
        <Route path='/post/:userId/:id' component={GuestPage} />
        <Route path="/about" component={AboutPage} />

        {/* <Route path='/home' exact /> */}
      </Switch>
    </BrowserRouter>,
  ];
}

export default App;
