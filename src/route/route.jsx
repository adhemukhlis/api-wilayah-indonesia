import React, { Component } from "react";
import Base from "./base";
import {DisableReactDevTools} from "../lib/devtool-killer";
class Route extends Component {
	componentDidMount(){
		DisableReactDevTools(true)
	}
  render() {
    return <Base/>;
  }
}
export default Route;
