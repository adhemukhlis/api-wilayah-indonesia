import React, { Component } from "react";
import Base from "./base";
import {DisableReactDevTools} from "../lib/devtool-killer";
class Route extends Component {
	componentDidMount(){
		DisableReactDevTools(false)
	}
  render() {
    return <Base />;
  }
}
export default Route;
