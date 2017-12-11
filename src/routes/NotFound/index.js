import React from 'react';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  card: {
    margin: "10px"
  }
});

const NotFound = ({ classes, description }) =>
  <Card className={classes.card}>
    <CardContent>
      <Typography type="h1">This page was not found.</Typography>
    </CardContent>
  </Card>;

export default withStyles(styles)(NotFound);