import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import Main from "./pages/Main";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/ReactUserDirectory" component={Main} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
