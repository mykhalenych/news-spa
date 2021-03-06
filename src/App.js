import React from "react";
import {BrowserRouter, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";
import PrivateRoute from "./components/PrivateRoute";
import Loading from "./components/Loading";
import {Navigation} from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Profile from "./views/Profile";
import { useAuth0 } from "./react-auth0-spa";
import ScienceNews from './views/ScienceNews'
import FootballNews from './views/FootballNews'
import BusinessNews from './views/BusinessNews'
import News from './views/News'
import "./App.css";

import initFontAwesome from "./utils/initFontAwesome";
initFontAwesome();

const App = () => {

  const { loading } = useAuth0();

  if (loading) {
    return <Loading />;
  }

  return (
    <BrowserRouter 
    >
      <div id="app" className="d-flex flex-column h-100">
        <Navigation />
        <Container className="flex-grow-1 mt-5">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/news" component={News} />
            <Route path="/football" component={FootballNews} />
            <Route path="/science" component={ScienceNews} />
            <Route path="/business" component={BusinessNews} />      
            <PrivateRoute path="/profile" component={Profile} />
          </Switch>
        </Container>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
