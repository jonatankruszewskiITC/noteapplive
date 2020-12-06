import React from "react";
import Note from "./Note";
import convertDate from "../helpers/convertDate";
import { Grid, Box } from "@material-ui/core";

const NoteList = (props) => {
  const { notes } = props;
  // notes: { "01": {}, "02": {} }, "beto" : []
  // const keyArray = Object.keys(notes) // [ 01, 02, "beto"]
  // keyArray.map((key) => <Note note=notes[key] key={key}

  return (
    <Box m={2}>
      <Grid container spacing={6}>
        {Object.keys(notes).map((keyName) => {
          return (
            <Note
              note={notes[keyName]}
              key={keyName}
              formatedDate={convertDate(notes[keyName].date)}></Note>
          );
        })}
      </Grid>
    </Box>
  );
};

export default NoteList;
