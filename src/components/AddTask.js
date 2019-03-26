import React, { Component } from "react";
import TaskList from "./Task";

class AddTask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };
    this.addItem = this.addItem.bind(this);
  }

  addItem(e) {
    if (this.inputElement !== "") {
      var newItem = [
        {
          title: this.inputTitle.value,
          total: this.inputTotal.value,
          description: this.inputDescription.value
        }
      ];

      this.setState(prevState => {
        return {
          items: prevState.items.concat(newItem)
        };
      });
    }

    this.inputTitle.value = "";
    this.inputTotal.value = "";
    this.inputDescription.value = "";

    e.preventDefault();
  }

  render() {
    return (
      <div className="wrap">
        <TaskList entries={this.state.items} key={this.id} tasks={this.props} />

        <form
          className="wrapForm"
          onSubmit={e => {
            this.addItem(e);
          }}
        >
          <div className="formTitle">Добавить новый объект</div>
          <div>
            <label>Заголовок *</label>
            <input ref={a => (this.inputTitle = a)} />
          </div>
          <div>
            <label>Добавить пункт</label>
            <input ref={a => (this.inputTotal = a)} />
          </div>
          <div>
            <label>Описание</label>
            <input ref={a => (this.inputDescription = a)} />
          </div>

          <button type="submit">Добавить</button>
        </form>
      </div>
    );
  }
}
export default AddTask;
