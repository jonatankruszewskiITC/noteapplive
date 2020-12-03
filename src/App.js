import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Form from "./components/Form";
import NoteList from "./components/NoteList";
import { v4 as uuidv4 } from "uuid";
import createNote from "./helpers/createNote";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: {},
      shouldShowMOdal: false,
      noteToShow: null,
    };
    this.createNote = this.createNote.bind(this);
  }

  createNote(body, title) {
    const id = uuidv4();
    const note = createNote(id, body, title);
    const newNotes = Object.assign(this.state.notes, note);
    this.setState({ notes: newNotes });
  }

  deleteNote() {}
  updateNote() {}

  render() {
    const {
      state: { notes },
      createNote,
    } = this;
    return (
      <div>
        <Form
          createNote={(body, title) => {
            createNote(body, title);
          }}></Form>
        <NoteList notes={notes}></NoteList>
      </div>
    );
  }
}

export default App;
