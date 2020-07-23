import { tassign } from 'tassign';
import { Task } from '../models/task.model';
import { TaskActions, TaskActionTypes } from './app.action';

let todoList = [];
let inProgressList = [];
let doneList = [];
let localStorageState = JSON.parse(localStorage.getItem("state"));

if (localStorageState) {
  todoList = localStorageState.task.todoList;
  inProgressList = localStorageState.task.inProgressList
  doneList = localStorageState.task.doneList
}

/**
 *  set initial state of tasks  - Setting data from localstorate since we dont have API call to update data on refresh page
 */
const initialTaskState: Task = { todoList: todoList, inProgressList: inProgressList, doneList: doneList };

/**
 *  update old state to new state 
 */
export function taskReducer(state = initialTaskState, action: TaskActions): Task {
  switch (action.type) {
    case TaskActionTypes.SETTODO:
      return tassign(state, action.payload);
    case TaskActionTypes.SETINPROGRESS:
      return tassign(state, action.payload);
    case TaskActionTypes.SETDONE:
      return tassign(state, action.payload);
    default:
      return state;
  }
}