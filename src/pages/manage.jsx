import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
class Manage extends Component {
  componenDidMount(){
    this.props.setManageOn()
  }
  // return <Redirect to={"/"} />;
  render() {
    
    return <div>aaaa</div>;
  }
}
export default Manage;
