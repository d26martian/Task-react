import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faTh } from "@fortawesome/free-solid-svg-icons";
import "../css/main.css";

library.add(faList, faTh);

class ViewTasks extends Component {
  render() {
    return (
      <div className="lookItems">
        <p>Список объектов</p>
        <div className="listLs">
          <FontAwesomeIcon icon={faList} className="list" />
        </div>
        <div className="blockLs">
          <FontAwesomeIcon icon={faTh} className="th" />
        </div>
      </div>
    );
  }
}
export default ViewTasks;
