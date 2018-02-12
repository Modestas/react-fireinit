import React from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import theme from 'styles/theme';
import Routes from 'routes';
import Reboot from 'material-ui/Reboot';
import HeaderBar from 'components/HeaderBar';

const App = ({ store }) =>
  <MuiThemeProvider theme={theme}>
    <Reboot/>
    <HeaderBar/>
    <Routes/>
  </MuiThemeProvider>;


export default App;