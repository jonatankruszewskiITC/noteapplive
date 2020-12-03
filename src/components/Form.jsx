import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteTitle: "",
      noteBody: "",
    };
  }

  createNote() {}
  handleChange(e) {}

  render() {
    return (
      <form>
        <input name="noteTitle"></input>
        <textarea name="noteBody"></textarea>
        <input type="submit" value="Create note"></input>
      </form>
    );
  }
}

export default Form;
