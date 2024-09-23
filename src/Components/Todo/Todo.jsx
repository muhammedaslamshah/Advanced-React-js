import React, { Component, PureComponent } from "react";
import List from "../List/List";
import { dynamicHandler } from "../../Utils";
export default class Todo extends PureComponent {
  sendClick = (data) => (event) => {
    console.log(data);
    console.log(event);
    
  };

  render() {
    return (
      <div className="todoapp-container">
        <button onClick={ this.sendClick("data")}>Click</button>
      </div>
    );
  }
}
