import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

export default () =>
  <AppBar position="static" color="primary">
    <Toolbar>
      <Typography type="title" color="inherit">
        {process.env.REACT_APP_WEBSITE_NAME}
      </Typography>
    </Toolbar>
  </AppBar>;