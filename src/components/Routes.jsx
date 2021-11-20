import React from "react";
import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { Navigation } from "./navigation";
import { Header } from "./header";
import { Features } from "./features";
import { About } from "./about";
import { Services } from "./services";
import { Gallery } from "./gallery";

import { Team } from "./Team";
import { Contact } from "./contact";
import JsonData from "../data/data.json";
import Login from "./login";
import Register from "./register";
import Home from "./home";
function Routes() {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Navigation />
          <Header data={landingPageData.Header} />
          <Contact data={landingPageData.Contact} />
        </Route>
        <Route exact path="/home">
          <Navigation />
          <Home data={landingPageData.Header} />
          <Services data={landingPageData.Services} />
          <Features data={landingPageData.Features} />

          <Gallery data={landingPageData.Gallery} />
          <Contact data={landingPageData.Contact} />
        </Route>

        <Route path="/features">
          <Navigation /> <Features data={landingPageData.Features} />
        </Route>

        <Route path="/about">
          <Navigation /> <About data={landingPageData.About} />
        </Route>

        <Route path="/services">
          <Navigation /> <Services data={landingPageData.Services} />
        </Route>

        <Route path="/gallery">
          <Navigation /> <Gallery data={landingPageData.Gallery} />
        </Route>

        <Route path="/team">
          <Navigation /> <Team data={landingPageData.Team} />
        </Route>
        <Route path="/login">
          {" "}
          <Login />
        </Route>
        <Route path="/register">
          {" "}
          <Register />
        </Route>
      </Switch>
    </div>
  );
}
export default Routes;
