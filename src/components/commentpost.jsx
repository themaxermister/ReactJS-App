
import React, { Component } from "react";
import NavBar from "./navbar";
import MainPost from "./mainpost";
import queryString from 'query-string';
import {BrowserRouter, Route, Link } from 'react-router-dom';

export default class CommentPost extends Component {
  constructor(comments) {
      super(comments) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.routeParam = comments.match.params.postId;
      this.state = { //state is by default an object 
      pageName: "Comments of Post ID",
      headers: ["Comment ID", "Name", "Email", "Body"],
      postId: this.routeParam,
      comments: []
   }
 }

 getCommentData () {
   fetch("https://jsonplaceholder.typicode.com/comments?postId=" + this.state.postId)
      .then(response => response.json())
      .then(json => {
         console.log(json);
         json.forEach(element => {
            var entry = {commentid:element.id, name:element.name, email: element.email, body:element.body};
            console.log(entry);
            this.setState({comments: this.state.comments.concat(entry)})               
         });
      })
}

renderCommentData()  {
   return this.state.comments.map((comment, index) => {
      var commentid = comment.commentid;
      var name = comment.name;
      var email = comment.email;
      var body = comment.body;

      return (
         <tr key={commentid} > 
            <td>{commentid}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{body}</td>
         </tr>
      )
   })
}

renderCommentHeader() {
   let header = this.state.headers;
   return header.map((key, index) => {
      return <th key={index}>{key.charAt(0).toUpperCase()+key.slice(1)}</th>
   })
}

componentDidMount(){
   this.getCommentData();
}

render() {
      return (
         <div>
            <NavBar pageName={this.state.pageName + " " + this.state.postId} />
            <table className='posts'>
               <tbody>
               <tr>{this.renderCommentHeader()}</tr>
                  {this.renderCommentData()}
               </tbody>
            </table>
            <div className="button">
               <Link to='/'>
                  <button type="button" className="button">Back</button>
               </Link>
            </div>
         </div>
      )
   }
};