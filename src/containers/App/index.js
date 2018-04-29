import React from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import theme from 'styles/theme';
import Routes from 'routes';
import CssBaseline from 'material-ui/CssBaseline';
import HeaderBar from 'components/HeaderBar';

const App = ({ store }) =>
  <MuiThemeProvider theme={theme}>
    <CssBaseline/>
    <HeaderBar/>
    <Routes/>
  </MuiThemeProvider>;


export default App;