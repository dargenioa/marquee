import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Logo from "./components/layout/Logo/Logo";
import Menu from "./components/layout/Menu/Menu";
import Industries from "./pages/Industries";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/industries">
          <Industries/>
        </Route>
        <Route exact path={["/", "/services"]}>
          <Services/>
        </Route>
        <Route exact path="/about">
          <AboutUs/>
        </Route>
      </Switch>
    </Router>

    </>
  );
}

export default App;
