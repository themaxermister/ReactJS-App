import React, {Component} from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import "./index.css";

import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import MainPost from "./components/mainpost";
import CommentPost from "./components/commentPost";

const routing = (
    <Router>
      <div>
        <Route path="/" component={MainPost} />
        <Route path="/comments/:postId" component={CommentPost}} />
      </div>
    </Router>
    
  ) 

ReactDOM.render(routing, document.getElementById('root'))

serviceWorker.unregister();
