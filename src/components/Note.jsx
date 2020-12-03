import React, { Component } from "react";

const Note = (props) => {
  const note = props.note ? props.note : null;

  return (
    <div>
      {note && (
        <>
          <p>{props.note.title}</p>
          <p>{props.note.body}</p>
          <p>{props.note.date}</p>
        </>
      )}
    </div>
  );
};

export default Note;
