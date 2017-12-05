/* eslint-disable flowtype/require-valid-file-annotation */
import { create, SheetsRegistry } from 'jss';
import preset from 'jss-preset-default';
import theme from './theme';

import createGenerateClassName from 'material-ui/styles/createGenerateClassName';

// Configure JSS
const jss = create(preset());
jss.options.createGenerateClassName = createGenerateClassName;

export const sheetsManager = new Map();

export default function createContext() {
  return {
    jss,
    theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager,
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
  };
}
