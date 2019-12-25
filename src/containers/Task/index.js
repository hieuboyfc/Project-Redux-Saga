import { Button, Grid } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import * as taskActions from '../../actions/task';
import TaskForm from '../../components/Task/TaskForm';
import TaskList from '../../components/Task/TaskList';
import { STATUSES } from '../../constants';
import styles from './styles';
import SearchBox from '../../components/SearchBox';

class Task extends Component {
  state = {
    open: false,
  };

  componentDidMount() {
    const { dataTasks } = this.props;
    const { fetchListTask } = dataTasks;
    fetchListTask();
  }

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

  handleFilter = e => {
    const { value } = e.target;
    const { dataTasks } = this.props;
    const { filterTask } = dataTasks;
    filterTask(value);
  };

  renderBoard() {
    const { listTask } = this.props;
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

  renderSearchBox() {
    let xhtml = null;
    xhtml = <SearchBox handleChange={this.handleFilter} />;
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
          title="Thêm mới công việc"
        >
          <AddIcon /> Thêm Mới Công Việc
        </Button>
        {this.renderSearchBox()}
        {this.renderBoard()}
        {this.renderForm()}
      </div>
    );
  }
}

Task.propTypes = {
  classes: PropTypes.object,
  open: PropTypes.bool,
  dataTasks: PropTypes.shape({
    fetchListTask: PropTypes.func,
    filterTask: PropTypes.func,
  }),
  listTask: PropTypes.array,
};

const mapStateToProps = state => {
  return {
    listTask: state.task.listTask,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    dataTasks: bindActionCreators(taskActions, dispatch),
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withStyles(styles), withConnect)(Task);
