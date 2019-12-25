import { Button, Modal, Grid, TextField, Box } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Clear';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './styles';

class TaskForm extends Component {
  render() {
    const { classes, open, closeForm } = this.props;
    return (
      <Modal open={open} onClose={closeForm}>
        <div className={classes.modal}>
          <div className={classes.header}>
            <span className={classes.title}>Thêm mới công việc</span>
            <CloseIcon />
          </div>
          <div className={classes.content}>
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
                    <Button
                      variant="contained"
                      onClick={closeForm}
                      color="primary"
                    >
                      OK
                    </Button>
                    <Box mr={1}>
                      <Button variant="contained" onClick={closeForm}>
                        Cancel
                      </Button>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </form>
          </div>
        </div>
      </Modal>
    );
  }
}

TaskForm.propTypes = {
  classes: PropTypes.object,
  open: PropTypes.bool,
  closeForm: PropTypes.func,
};

export default withStyles(styles)(TaskForm);
