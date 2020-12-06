import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
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
      <Box p={2}>
        <Card>
          <CardContent>
            <Typography color="textPrimary" variant="h3" gutterBottom>
              Create your note!{" "}
            </Typography>
          </CardContent>
          <CardContent>
            <TextField
              label="Note Title"
              value={noteTitle}
              onInput={(e) => {
                handleChange(e);
              }}
              fullWidth
              name="noteTitle"
              variant="filled"
            />
          </CardContent>
          <CardContent>
            <TextField
              label="My Note"
              multiline
              fullWidth
              rows={4}
              variant="outlined"
              value={noteBody}
              onInput={(e) => {
                handleChange(e);
              }}
              name="noteBody"
            />
          </CardContent>

          <CardActions>
            <Button
              onClick={(e) => {
                onNoteCreation(e);
              }}>
              Create Note
            </Button>
          </CardActions>
        </Card>
      </Box>
    );
  }
}

export default Form;
