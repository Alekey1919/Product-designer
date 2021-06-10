import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import MyDesigns from "./pages/MyDesigns/MyDesigns";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Design from "./pages/Design/Design";
import Navbar from "./Components/Navbar/Navbar";
import Sizes from "./pages/Home/Sizes";
import FAQ from "./pages/Home/FAQ";
import ScrollToTop from "./Components/ScrollToTop";
import DesignTshirt from "./pages/Design/DesignT-shirt";
import DesignSecso from "./pages/Design/DesignSecso";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <main>
        <Switch>
          <Route path="/" exact>
            <Design />
          </Route>
          <Route path="/sizes" exact>
            <Sizes />
          </Route>
          <Route path="/FAQ" exact>
            <FAQ />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/design" exact>
            <Home />
          </Route>
          <Route path="/design-t-shirt" exact>
            <DesignTshirt />
          </Route>
          <Route path="/my-designs" exact>
            <MyDesigns />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
