import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import LoadingIcon from './../../assets/icons/loading01.gif';
import styles from './styles';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import * as loadingActions from '../../actions/loading';

class GlobalLoading extends Component {
  render() {
    const { classes, showLoading } = this.props;
    let xhtml = null;
    if (showLoading) {
      xhtml = (
        <div className={classes.globalLoading}>
          <img src={LoadingIcon} alt="loading" className={classes.icon} />
        </div>
      );
    }
    return xhtml;
  }
}

GlobalLoading.propTypes = {
  classes: PropTypes.object,
  showLoading: PropTypes.bool,
};

const mapStateToProps = state => {
  return {
    showLoading: state.loading.showLoading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadingActionsCreators: bindActionCreators(loadingActions, dispatch),
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withStyles(styles), withConnect)(GlobalLoading);
