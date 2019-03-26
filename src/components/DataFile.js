import React, { Component } from "react";
import dataFile from "../data/data.json";

class DataFile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoader: true,
      dataSourse: dataFile.data
    };
  }
  getObj() {
    fetch(dataFile)
      .then(res => res.json())
      .then(data => this.setState({ dataSourse: data }));
  }
  render() {
    const dataTasks = this.state.dataSourse.map((post, id) => (
      <div className="taskList" key={id} id={post.id}>
        <p>
          {post.title} <span>{post.id}</span>
        </p>
        <span className="lineBot" />
        <p>{post.attributes}</p>
        <span className="lineBot" />
        <p>{post.description}</p>
      </div>
    ));
    return <div className="wrapTasks">{dataTasks}</div>;
  }
}
export default DataFile;
