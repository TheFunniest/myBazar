import React from "react";
import "./assets/fonts/CeraPro/ceraPro.css";
import Container from "@material-ui/core/Container";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// COMPONENTS
import Home from './components/Home/home'
import Ads from "./components/ads/ads";
import NavBar from "./components/navbar/navbar";
import Sections from "./components/sections/sections";
import LinkStepper from "./components/LinkStepper/linksStepper";
import CatalogSectionList from "./components/CatalogSectionList/CatalogSectionList";
import Footer from "./components/footer/footer";





function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
        <Container>
          <Sections />
          {/* <Ads />
          <LinkStepper /> */}
        </Container>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/catalog_section"  component={CatalogSectionList}/>
        </Switch>

      </Router>
      <Footer />
    </div>
  );
}

export default App;
