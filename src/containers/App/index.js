import { withStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import theme from '../../commons/Theme';
import Task from '../Task';
import styles from './styles';
import configureStore from '../../redux/configureStore';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Task />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default withStyles(styles)(App);
