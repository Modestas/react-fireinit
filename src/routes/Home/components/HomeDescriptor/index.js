import React from 'react';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  card: {
    margin: "10px"
  }
});

const HomeDescriptor = ({ classes, description }) =>
  <Card className={classes.card}>
    <CardContent>
      <Typography type="body1">
        {description}
      </Typography>
    </CardContent>
  </Card>;

export default withStyles(styles)(HomeDescriptor);