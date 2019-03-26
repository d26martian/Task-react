import React, { Component } from "react";
import ViewTasks from "./ViewTasks";

class Header extends Component {
  eventAddFirst(e) {
    e.preventDefault();
  }
  eventAddLast(e) {
    e.preventDefault();
  }
  eventRemoveFirst(e) {
    e.preventDefault();
  }
  eventRemoveLast(e) {
    e.preventDefault();
  }
  render() {
    return (
      <div>
        <section className="options">
          <div onClick={this.eventAddFirst}>
            <p>Добавить в начало</p>
          </div>
          <div onClick={this.eventAddLast}>
            <p>Добавить в конец</p>
          </div>
          <div onClick={this.eventRemoveFirst}>
            <p>Удалить первый</p>
          </div>
          <div onClick={this.eventRemoveLast}>
            <p>Удалить поседний</p>
          </div>
        </section>
        <ViewTasks />
      </div>
    );
  }
}
export default Header;
