import React, { Component } from "react";
import Note from "./Note";

const NoteList = (props) => {
  const { notes } = props;
  // notes: { "01": {}, "02": {} }, "beto" : []
  // const keyArray = Object.keys(notes) // [ 01, 02, "beto"]
  // keyArray.map((key) => <Note note=notes[key] key={key}

  return (
    <Note>
      {Object.keys(notes).map((keyName) => {
        return <Note note={notes[keyName]} key={keyName}></Note>;
      })}
    </Note>
  );
};

export default NoteList;
