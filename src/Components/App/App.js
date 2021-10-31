import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import ChatView from "../Chat/Chat";

function App() {
  return (
    <Router>
      <div className="body noselect">
        <Switch>
        <Route path=""><ChatView /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
