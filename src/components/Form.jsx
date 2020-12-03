import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteTitle: "",
      noteBody: "",
    };
  }

  onNoteCreation = (e) => {
    e.preventDefault();
    const {
      props: { createNote },
      state: { noteBody, noteTitle },
    } = this;
    createNote(noteBody, noteTitle);
    this.setState({ noteBody: "", noteTitle: "" });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const {
      handleChange,
      onNoteCreation,
      state: { noteTitle, noteBody },
    } = this;
    return (
      <form
        onSubmit={(e) => {
          onNoteCreation(e);
        }}>
        <input
          value={noteTitle}
          onInput={(e) => {
            handleChange(e);
          }}
          name="noteTitle"></input>
        <textarea
          value={noteBody}
          onInput={(e) => {
            handleChange(e);
          }}
          name="noteBody"></textarea>
        <input type="submit" value="Create note"></input>
      </form>
    );
  }
}

export default Form;
