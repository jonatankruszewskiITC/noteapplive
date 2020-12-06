import React, { useEffect } from "react";
import convertDate from "../helpers/convertDate";

const Note = (props) => {
  const { title, body } = props.note;

  return (
    <div>
      <div>
        <p>{title}</p>
        <p>{body}</p>
        <p>{props.formatedDate}</p>
      </div>
    </div>
  );
};

export default Note;
