import React from "react";
import { connect } from "react-redux";
import { requsetTaskCreation } from './../store/mutations';
import { Link } from 'react-router-dom';
import add from '../assets/add.png';

export const TaskList = ({ tasks, name, id, createNewTask }) => (
  <div className="taskList-container">
    <h3>{name}</h3>
    <div className="tasks">
      {tasks.map(task => (
          <Link key={task.id} to={`/task/${task.id}`}>
          <div >{task.name}</div>
          </Link>
      ))}
      <button onClick={()=> createNewTask(id)}><img src={add} alt=""></img></button>
    </div>
  </div>
);

const mapStateToProps = (state, ownProps) => {
  let groupID = ownProps.id;
  return {
    name: ownProps.name,
    id: groupID,
    tasks: state.tasks.filter(task => task.group === groupID)
  };
};
const mapDispatchToProps=(disptch, ownProps)=>{
    return{
        createNewTask(id){
            console.log("Creating new task....",id);
            disptch(requsetTaskCreation(id));
        }
    }
}
export const ConnectedTaskList = connect(mapStateToProps,mapDispatchToProps)(TaskList);
