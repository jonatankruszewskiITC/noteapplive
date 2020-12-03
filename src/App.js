import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Form from "./components/Form";
import NoteList from "./components/NoteList";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: { "01": {}, "02": {} },
      shouldShowMOdal: false,
      noteToShow: null,
    };
  }

  render() {
    const {
      state: { notes },
    } = this;
    return (
      <div>
        <Form></Form>
        <NoteList notes={notes}></NoteList>
      </div>
    );
  }
}

export default App;
