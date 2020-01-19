import { Button, Grid } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import * as modalActions from '../../actions/modal';
import * as taskActions from '../../actions/task';
import SearchBox from '../../components/SearchBox';
import TaskForm from '../../components/Task/TaskForm';
import TaskList from '../../components/Task/TaskList';
import { STATUSES } from '../../constants';
import styles from './styles';

class Task extends Component {
  componentDidMount() {
    const { taskActionsCreators } = this.props;
    const { fetchListTask } = taskActionsCreators;
    fetchListTask();
  }

  openForm = () => {
    const { modalActionsCreators } = this.props;
    const {
      showModal,
      changeModalTitle,
      changeModalContent,
    } = modalActionsCreators;
    showModal();
    changeModalTitle('Thêm mới công việc');
    changeModalContent(<TaskForm />);
  };

  handleFilter = e => {
    const { value } = e.target;
    const { taskActionsCreators } = this.props;
    const { filterTask } = taskActionsCreators;
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
      </div>
    );
  }
}

Task.propTypes = {
  classes: PropTypes.object,
  open: PropTypes.bool,
  taskActionsCreators: PropTypes.shape({
    fetchListTask: PropTypes.func,
    filterTask: PropTypes.func,
  }),
  modalActionsCreators: PropTypes.shape({
    showModal: PropTypes.func,
    hideModal: PropTypes.func,
    changeModalTitle: PropTypes.func,
    changeModalContent: PropTypes.func,
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
    taskActionsCreators: bindActionCreators(taskActions, dispatch),
    modalActionsCreators: bindActionCreators(modalActions, dispatch),
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withStyles(styles), withConnect)(Task);
