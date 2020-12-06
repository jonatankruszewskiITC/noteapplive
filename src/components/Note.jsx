import React from "react";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";

const Note = (props) => {
  const {
    note: { title: noteTitle, body },
    formatedDate,
  } = props;

  return (
    <Grid item xs={12} sm={6} md={4} lg={2} xl={1}>
      <Card>
        <CardContent>
          <Typography variant="body2" color="textPrimary" component="h5">
            {noteTitle}
          </Typography>
          <Typography variant="body2" color="textPrimary" component="h4">
            {body}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h5">
            {formatedDate}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Note;
