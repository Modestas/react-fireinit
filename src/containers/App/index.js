import React from 'react';
import { Provider } from 'react-redux';
import JssProvider from 'react-jss/lib/JssProvider';
import { withStyles, MuiThemeProvider } from 'material-ui/styles';
import createContext from 'styles/createContext';
import Routes from 'routes';
import HeaderBar from 'components/HeaderBar';

const styles = theme => ({
  '@global': {
    html: {
      background: theme.palette.background.default,
        WebkitFontSmoothing: 'antialiased', // Antialiasing.
        MozOsxFontSmoothing: 'grayscale', // Antialiasing.
    },
    body: {
      margin: 0,
    },
  },
});

const context = createContext();
const App = ({ store }) =>
  <Provider store={store}>
    <JssProvider registry={context.sheetsRegistry} jss={context.jss}>
      <MuiThemeProvider theme={context.theme} sheetsManager={context.sheetsManager}>
        <HeaderBar/>
        <Routes/>
      </MuiThemeProvider>
    </JssProvider>
  </Provider>;

export default withStyles(styles)(App);