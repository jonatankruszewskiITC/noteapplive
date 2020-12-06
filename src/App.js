import "./App.css";
import React, { Component } from "react";
import Form from "./components/Form";
import NoteList from "./components/NoteList";
import { v4 as uuidv4 } from "uuid";
import createNote from "./helpers/createNote";
import Header from "./components/Header";
import { Grid } from "@material-ui/core";

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
  shouldRenderNotes() {
    return (
      Object.keys(this.state.notes).length > 0 &&
      this.state.notes.constructor === Object
    );
  }

  render() {
    const {
      state: { notes },
      createNote,
    } = this;
    return (
      <div>
        <Grid>
          <Header></Header>
        </Grid>
        <Grid container>
          <Grid item xs={false} md={2}></Grid>
          <Grid item xs={12} md={8}>
            <Form
              createNote={(body, title) => {
                createNote(body, title);
              }}></Form>
          </Grid>
          <Grid item xs={false} md={2}></Grid>
        </Grid>
        {this.shouldRenderNotes() && <NoteList notes={notes}></NoteList>}
      </div>
    );
  }
}

export default App;
