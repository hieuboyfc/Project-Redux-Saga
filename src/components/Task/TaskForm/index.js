import { Box, Button, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { Field, reduxForm } from 'redux-form';
import * as modalActions from '../../../actions/modal';
import renderTextField from '../../FormHelper/TextFiled';
import validate from '../TaskForm/validate';
import styles from './styles';

class TaskForm extends Component {
  handleSubmitForm = data => {
    console.log(data);
  };

  render() {
    console.log(this.props);
    const {
      classes,
      modalActionsCreators,
      handleSubmit,
      invalid,
      submitting,
    } = this.props;
    const { hideModal } = modalActionsCreators;
    return (
      <form onSubmit={handleSubmit(this.handleSubmitForm)}>
        <Grid container>
          <Grid item md={12}>
            <Field
              id="title"
              label="Tiêu đề"
              className={classes.textField}
              margin="normal"
              name="title"
              component={renderTextField}
            />
          </Grid>
          <Grid item md={12}>
            <Field
              id="description"
              label="Mô tả"
              multiline
              rowsMax="4"
              className={classes.textField}
              name="description"
              component={renderTextField}
            />
          </Grid>
          <Grid item md={12}>
            <Box display="flex" flexDirection="row-reverse" mt={3}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={invalid || submitting}
              >
                Lưu lại
              </Button>
              <Box mr={1}>
                <Button variant="contained" onClick={hideModal}>
                  Hủy bỏ
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
  handleSubmit: PropTypes.func,
  invalid: PropTypes.bool,
  submitting: PropTypes.bool,
};

const mapStateToProps = null;
const mapDispatchToProps = dispatch => {
  return {
    modalActionsCreators: bindActionCreators(modalActions, dispatch),
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const FORM_NAME = 'TASK_MANAGEMENT';

const withReduxForm = reduxForm({
  form: FORM_NAME,
  validate,
});

export default compose(
  withStyles(styles),
  withConnect,
  withReduxForm,
)(TaskForm);
