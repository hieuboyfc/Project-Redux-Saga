import { Modal } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Clear';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import * as modalActions from '../../actions/modal';
import styles from './styles';

class CommonModal extends Component {
  render() {
    const {
      classes,
      open,
      component,
      title,
      modalActionsCreators,
    } = this.props;
    const { hideModal } = modalActionsCreators;
    return (
      <Modal open={open}>
        <div className={classes.modal}>
          <div className={classes.header}>
            <span className={classes.title}>{title}</span>
            <CloseIcon className={classes.icon} onClick={hideModal} />
          </div>
          <div className={classes.content}>{component}</div>
        </div>
      </Modal>
    );
  }
}

CommonModal.propTypes = {
  classes: PropTypes.object,
  title: PropTypes.string,
  open: PropTypes.bool,
  component: PropTypes.object,
  modalActionsCreators: PropTypes.shape({
    hideModal: PropTypes.func,
  }),
};

const mapStateToProps = state => ({
  open: state.modal.showModal,
  component: state.modal.component,
  title: state.modal.title,
});

const mapDispatchToProps = dispatch => ({
  modalActionsCreators: bindActionCreators(modalActions, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withStyles(styles), withConnect)(CommonModal);
