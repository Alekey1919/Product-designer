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
import DesignHoodie from "./pages/Design/DesignHoodie";
import DesignCushion from "./pages/Design/DesignCushion";
import DesignMug from "./pages/Design/DesignMug";
import DesignBib from "./pages/Design/DesignBib";
import DesignMousepad from "./pages/Design/DesignMousepad";
import Login from "./pages/Login/Login";

const App = () => {
  return (
    <Router basename="/Product-designer">
      <ScrollToTop />
      <Navbar />
      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
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
            <Design />
          </Route>
          <Route path="/design-t-shirt" exact>
            <DesignTshirt />
          </Route>
          <Route path="/design-hoodie" exact>
            <DesignHoodie />
          </Route>
          <Route path="/design-cushion" exact>
            <DesignCushion />
          </Route>
          <Route path="/design-mug" exact>
            <DesignMug />
          </Route>
          <Route path="/design-mousepad" exact>
            <DesignMousepad />
          </Route>
          <Route path="/design-bib" exact>
            <DesignBib />
          </Route>
          <Route path="/my-designs" exact>
            <MyDesigns />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
