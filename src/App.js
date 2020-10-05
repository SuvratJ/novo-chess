import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'

import Navbar from "./components/navbar.component.js";
import Home from "./components/home.component";
import Game from "./components/game.component";
import Create from "./components/create.component";
import Browse from "./components/browse.component";
import Login from "./components/login.component";
import Settings from "./components/settings.component";

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" exact component={Home} />
      <Route path="/play" component={Game} />
      <Route path="/create" component={Create} />
      <Route path="/browse" component={Browse} />
      <Route path="/login" component={Login} />
      <Route path="/settings" component={Settings} />
    </Router>
  );
}

export default App;
