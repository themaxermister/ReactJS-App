
import React, { Component } from "react";
import NavBar from "./navbar";
import CommentPost from "./commentpost";
import {BrowserRouter, Route, Link } from 'react-router-dom';

 export default class MainPost extends Component {
   constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = { //state is by default an object 
         headers: ["id", "title","description"],
         postId: 0,
         posts:[]
      }
      
   }

   handleClick = (id) => {
      console.log("Clicked");
      this.setState({ postId: id });
      this.setState({redirect:true});
      this.props.history.push('/comments/' + id);

      return(
         <Link to={{
               pathname: '/comments/'+this.state.postId,
               state: { postId: true }
            }} />
      )
   }

   getTableData () {
      fetch('https://jsonplaceholder.typicode.com/posts')
         .then(response => response.json())
         .then(json => {
            json.forEach(element => {
               var entry = {id:element.id, title:element.title, description:element.body};
               this.setState({posts: this.state.posts.concat(entry)})            
            });
         })
   }
   
   renderTableData()  {
      return this.state.posts.map((post) => {
         var id = post.id;
         var title = post.title;
         var description = post.description;
         
         return (
               <tr key={id} onClick={() => this.handleClick(id)}> 
                  <td>{id}</td>
                  <td>{title}</td>
                  <td>{description}</td>
               </tr>
         )  
      }
      )
   }

   renderTableHeader() {
      let header = this.state.headers;
      return header.map((key, index) => {
         return <th key={index}>{key.charAt(0).toUpperCase()+key.slice(1)}</th>
      })
   }

   componentWillMount(){
      this.getTableData();
   }

   render() {
      return (
            <div>
               <NavBar pageName="Posts"/>
               <table className='posts'>
                  <tbody>
                  <tr>{this.renderTableHeader()}</tr>
                     {this.renderTableData()}
                  </tbody>
               </table>
            </div>
      )
   }
 };
