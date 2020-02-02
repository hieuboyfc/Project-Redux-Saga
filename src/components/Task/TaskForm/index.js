import { Box, Button, Grid, MenuItem } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { Field, reduxForm } from 'redux-form';
import * as modalActions from '../../../actions/modal';
import * as taskActions from '../../../actions/task';
import renderTextField from '../../FormHelper/TextField';
import renderSelectField from '../../FormHelper/Select';
import validate from '../TaskForm/validate';
import styles from './styles';

class TaskForm extends Component {
  handleSubmitForm = data => {
    const { taskActionsCreators, taskEditting } = this.props;
    const { addTask, updateTask } = taskActionsCreators;
    if (taskEditting && taskEditting.id) {
      updateTask(data);
    } else {
      addTask(data);
    }
  };

  renderStatusSelection() {
    let xhtml = null;
    const { taskEditting, classes } = this.props;
    if (taskEditting && taskEditting.id) {
      xhtml = (
        <Field
          id="status"
          label="Trạng thái"
          className={classes.select}
          name="status"
          component={renderSelectField}
        >
          <MenuItem value={0}>Sẵn sàng</MenuItem>
          <MenuItem value={1}>Đang xử lý</MenuItem>
          <MenuItem value={2}>Đã hoàn thành</MenuItem>
        </Field>
      );
    }
    return xhtml;
  }

  render() {
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
            {this.renderStatusSelection()}
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
  taskActionsCreators: PropTypes.shape({
    addTask: PropTypes.func,
    updateTask: PropTypes.func,
  }),
  handleSubmit: PropTypes.func,
  invalid: PropTypes.bool,
  submitting: PropTypes.bool,
  taskEditting: PropTypes.object,
};

const mapStateToProps = state => {
  return {
    taskEditting: state.task.taskEditting,
    initialValues: {
      title: state.task.taskEditting ? state.task.taskEditting.title : '',
      description: state.task.taskEditting
        ? state.task.taskEditting.description
        : '',
      status: state.task.taskEditting ? state.task.taskEditting.status : '',
    },
  };
};
const mapDispatchToProps = dispatch => {
  return {
    modalActionsCreators: bindActionCreators(modalActions, dispatch),
    taskActionsCreators: bindActionCreators(taskActions, dispatch),
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
