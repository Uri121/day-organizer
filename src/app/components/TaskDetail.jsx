import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as mutations from "../store/mutations";
import done from '../assets/done.png';

const TaskDetail = ({
  id,
  comments,
  task,
  isComplete,
  groups,
  setTaskCompletion,
  setTaskGroup,
  setTaskName
}) => (
  <div className="taskDetail-container">

      <input onChange={setTaskName} value={task.name}></input>

      <button className="btn-complete" onClick={() => setTaskCompletion(id, !isComplete)}>
        {isComplete ? `Reopen` : `Complete`}
      </button>

      <select onChange={setTaskGroup} value={task.group}>
        {groups.map(groups => (
          <option key={groups.id} value={groups.id}>
            {groups.name}
          </option>
        ))}
      </select>

      <Link to="/dashnoard">
        <button className="btn-done"><img src={done}alt=""></img></button>
      </Link>
  </div>
);

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.id;
  let task = state.tasks.find(task => task.id === id);
  let groups = state.groups;

  return {
    id,
    task,
    groups,
    isComplete: task.isComplete
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const id = ownProps.match.params.id;
  return {
    setTaskCompletion(id, isComplete) {
      dispatch(mutations.setTaskCompletion(id, isComplete));
    },
    setTaskGroup(e) {
      dispatch(mutations.setTaskGroup(id, e.target.value));
    },
    setTaskName(e) {
      dispatch(mutations.setTaskName(id, e.target.value));
    }
  };
};

export const ConnectedDetail = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskDetail);
