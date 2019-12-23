import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './styles';

class TaskForm extends Component {
  render() {
    const { classes, open, closeForm } = this.props;
    return (
      <Dialog
        open={open}
        onClose={closeForm}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add New Task</DialogTitle>
        <DialogContent>
          <TextField
            id="standard-name"
            label="Name"
            margin="normal"
            className={classes.textField}
          />
          <TextField
            id="standard-description"
            label="Description"
            margin="normal"
            className={classes.textField}
          />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={closeForm} color="primary">
            OK
          </Button>
          <Button variant="contained" onClick={closeForm} color="secondary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

TaskForm.propTypes = {
  classes: PropTypes.object,
  open: PropTypes.bool,
  closeForm: PropTypes.func,
};

export default withStyles(styles)(TaskForm);
