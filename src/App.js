import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import Home from "./components/Home/Home";
import Destination from "./components/Destination/Destination";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import TicketPart from "./components/TicketPart/TicketPart";
import { createContext, useState } from "react";
import Login from "./components/Login/Login";
import SignUp from "./components/Login/SignUp";

const userContext = createContext({});

function App() {
  const [loggedInUser, setLoggedInUser] = useState();
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <div className="">
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/destination/:dataId">
              <Destination></Destination>
            </Route>
            <Route path="/destination">
              <Destination></Destination>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signUp">
              <SignUp></SignUp>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </div>
      </Router>
    </userContext.Provider>
  );
}

export default App;
