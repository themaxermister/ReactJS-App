import React, {Component} from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import "./index.css";

import { BrowserRouter as Router, Route } from 'react-router-dom';

import MainPost from "./components/mainpost";
import CommentPost from "./components/commentpost";

const routing = (
    <Router>
      <div>
        <Route exact path="/" component={MainPost} />
        <Route exact path="/comments/:postId" component={CommentPost}/>
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'))

serviceWorker.unregister(); 
