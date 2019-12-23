import { Button, Grid } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import TaskForm from '../../components/TaskBoard/TaskForm';
import TaskList from '../../components/TaskBoard/TaskList';
import { STATUSES } from '../../constants';
import styles from './styles';

const listTask = [
  {
    id: 1,
    title: 'Chiều Hôm Ấy',
    description: 'Em khóc cho cuộc tình chúng mình',
    status: 0,
  },
  {
    id: 2,
    title: 'Vài Tháng Sau',
    description: 'Chẳng thể bước tới ôm em',
    status: 1,
  },
  {
    id: 3,
    title: 'Giá Như Anh',
    description: 'Người từng yêu anh cho anh mộng mơ ngày tháng mai sau ',
    status: 2,
  },
];

class TaskBoard extends Component {
  state = {
    open: false,
  };

  closeForm = () => {
    this.setState({
      open: false,
    });
  };

  openForm = () => {
    this.setState({
      open: true,
    });
  };

  renderBoard() {
    var h = null;
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {STATUSES.map(status => {
          const taskFilterByStatus = listTask.filter(
            task => task.status === status.value,
          );
          return (
            <TaskList
              tasks={taskFilterByStatus}
              status={status}
              key={status.value}
            />
          );
        })}
      </Grid>
    );
    return xhtml;
  }

  renderForm() {
    const { open } = this.state;
    let xhtml = null;
    xhtml = <TaskForm open={open} closeForm={this.closeForm} />;
    return xhtml;
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.taskBoard}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this.openForm}
        >
          <AddIcon /> Add New Task
        </Button>
        {this.renderBoard()}
        {this.renderForm()}
      </div>
    );
  }
}

TaskBoard.propTypes = {
  classes: PropTypes.object,
  open: PropTypes.bool,
};

export default withStyles(styles)(TaskBoard);
