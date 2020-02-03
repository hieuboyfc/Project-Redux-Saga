import React, { Component } from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import Sidebar from './Sidebar';
import Header from './Header';

class Dashboard extends Component {
  render() {
    const { children, classes } = this.props;
    return (
      <div className={classes.dashboard}>
        <Header />
        <Sidebar />
        {children}
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.object,
};

export default withStyles(styles)(Dashboard);
