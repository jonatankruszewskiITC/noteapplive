import React, { useEffect } from "react";

const Note = (props) => {
  // const note = props.note ? props.note : null;

  return (
    <div>
      <div>
        <p>{props.note.title}</p>
        <p>{props.note.body}</p>
        <p>{props.note.date}</p>
      </div>
    </div>
  );
};

export default Note;
