import React, { Component } from "react";

class TaskList extends Component {
  render() {
    var todoEntries = this.props.entries;

    var listItem = todoEntries.map((item, index) => {
      return (
        <div className="taskList" key={index}>
          <p>{item.title}</p>
          <span className="lineBot" />
          <p>{item.total}</p>
          <span className="lineBot" />
          <p>{item.description}</p>
        </div>
      );
    });

    return <div className="newTasks">{listItem}</div>;
  }
}

export default TaskList;
