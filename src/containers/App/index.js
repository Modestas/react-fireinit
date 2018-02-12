import React from 'react';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from 'material-ui/styles';
import theme from 'styles/theme';
import Routes from 'routes';
import Reboot from 'material-ui/Reboot';
import HeaderBar from 'components/HeaderBar';

const App = ({ store }) =>
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <Reboot/>
      <HeaderBar/>
      <Routes/>
    </MuiThemeProvider>
  </Provider>;

export default App;