import {
  Card,
  CardActions,
  CardContent,
  Fab,
  Grid,
  Icon,
  Typography,
} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './styles';

class TaskItem extends Component {
  render() {
    const { classes, task, status } = this.props;
    return (
      <Card>
        <CardContent>
          <Grid container justify="space-between">
            <Grid item md={8}>
              <Typography component="h2">{task.title}</Typography>
            </Grid>
            <Grid item md={4}>
              {status.label}
            </Grid>
          </Grid>
          <p>{task.description}</p>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Fab
            color="primary"
            aria-label="Edit"
            size="small"
            title="Sửa công việc"
          >
            <Icon fontSize="small">edit_icon</Icon>
          </Fab>
          <Fab
            color="secondary"
            aria-label="Delete"
            size="small"
            title="Xóa công việc"
          >
            <Icon fontSize="small">delete_icon</Icon>
          </Fab>
        </CardActions>
      </Card>
    );
  }
}

TaskItem.propTypes = {
  classes: PropTypes.object,
  task: PropTypes.object,
  status: PropTypes.object,
};

export default withStyles(styles)(TaskItem);
