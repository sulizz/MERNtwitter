import React from "react";
import { Link } from "react-router-dom";
// import "./navbar.css";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div>
          <Link to={"/tweets"}>All Tweets </Link>
          <br></br>
          <Link to={"/profile"}>Profile </Link>
          <br></br>
          <Link to={"/new_tweet"}>Write a Tweet </Link>
          <br></br>
          <button onClick={this.logoutUser}> Logout</button>
        </div>
      );
    } else {
      return (
        <div>
          <Link to={"/signup"}>Signup</Link>
          <br></br>
          <Link to={"/login"}>Login</Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h1>Chirper</h1>
        {this.getLinks()}
      </div>
    );
  }
}

export default NavBar;
