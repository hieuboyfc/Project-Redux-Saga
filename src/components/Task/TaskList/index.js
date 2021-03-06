import { Box, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import TaskItem from '../TaskItem';
import styles from './styles';

class TaskList extends Component {
  render() {
    const { classes, tasks, status, onClickEdit, onClickDelete } = this.props;
    return (
      <Grid item md={4} xs={12} key={status.value}>
        <Box mt={2} mb={2}>
          <div className={classes.status}>{status.label}</div>
        </Box>
        <div className={classes.wrapperListTask}>
          {tasks.map(task => {
            return (
              <TaskItem
                task={task}
                key={task.id}
                status={status}
                onClickEdit={onClickEdit}
                onClickDelete={onClickDelete}
              />
            );
          })}
        </div>
      </Grid>
    );
  }
}

TaskList.propTypes = {
  classes: PropTypes.object,
  tasks: PropTypes.array,
  status: PropTypes.object,
  onClickEdit: PropTypes.func,
  onClickDelete: PropTypes.func,
};

export default withStyles(styles)(TaskList);
