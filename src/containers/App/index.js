import { withStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import React, { Component } from 'react';
import theme from '../../commons/Theme';
import TaskBoard from '../TaskBoard';
import styles from './styles';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <TaskBoard />
      </ThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
