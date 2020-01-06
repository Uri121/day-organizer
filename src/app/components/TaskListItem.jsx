import { connect } from "react-redux";
import { Link } from "react-router-dom";
import React from "react";

export const TaskListItem = ({ id, name, isComplete }) => (
  <Link to={`/task/${id}`}>
    <div>
      <span>
        {name} {isComplete ? `✓` : null}
      </span>
    </div>
  </Link>
);

export const ConnectedTaskListItem = connect((state, ownProps) => {
  return {
    ...state.tasks.find(task => task.id === ownProps.id)
  };
})(TaskListItem);
