import { Box, Button, Grid, TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './styles';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import * as modalActions from '../../../actions/modal';

class TaskForm extends Component {
  render() {
    const { classes, modalActionsCreators } = this.props;
    const { hideModal } = modalActionsCreators;
    return (
      <form>
        <Grid container>
          <Grid item md={12}>
            <TextField
              label="Tiêu đề"
              className={classes.textField}
              margin="normal"
            />
          </Grid>
          <Grid item md={12}>
            <TextField
              label="Mô tả"
              className={classes.textField}
              margin="normal"
            />
          </Grid>
          <Grid item md={12}>
            <Box display="flex" flexDirection="row-reverse" mt={3}>
              <Button variant="contained" color="primary">
                OK
              </Button>
              <Box mr={1}>
                <Button variant="contained" onClick={hideModal}>
                  Cancel
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </form>
    );
  }
}

TaskForm.propTypes = {
  classes: PropTypes.object,
  modalActionsCreators: PropTypes.shape({
    hideModal: PropTypes.func,
  }),
};

const mapStateToProps = null;
const mapDispatchToProps = dispatch => {
  return {
    modalActionsCreators: bindActionCreators(modalActions, dispatch),
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withStyles(styles), withConnect)(TaskForm);
