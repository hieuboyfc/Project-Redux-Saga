import React, { Component } from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/styles';

class Content extends Component {
  render() {
    return <div>Content</div>;
  }
}

export default withStyles(styles)(Content);
