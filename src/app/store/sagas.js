import { take, put, select } from "redux-saga/effects";
import uuid from "uuid";
import axios from "axios";

import * as mutations from "./mutations";
import { history } from "./history";

const url =
  process.env.NODE_ENV === "production" ? "" : "http://localhost:7777";

export default function* taskCreationSaga() {
  while (true) {
    const { groupID } = yield take(mutations.REQUSET_TASK_CREATION);
    const ownerID = "U1";
    const taskID = uuid();
    yield put(mutations.createTask(taskID, groupID, ownerID));
    const { res } = yield axios.post(url + `/task/new`, {
      task: {
        id: taskID,
        group: groupID,
        owner: ownerID,
        isComplete: false,
        name: "New task"
      }
    });
  }
}

export function* taskModificationSaga() {
  while (true) {
    const task = yield take([
      mutations.SET_TASK_GROUP,
      mutations.SET_TASK_NAME,
      mutations.SET_TASK_COMPLETE
    ]);
    axios.post(url + `/task/update`, {
      task: {
        id: task.taskID,
        group: task.groupID,
        name: task.name,
        isComplete: task.isComplete
      }
    });
  }
}

export function* userAuthSaga() {
  while (true) {
    const { userName, password } = yield take(mutations.REQUSER_AUTH_USER);
    try {
      const { data } = yield axios.post(url + "/authenticate", {
        userName,
        password
      });
      if (!data) {
        throw new Error();
      }
      console.log("Authenticated!", data);
      yield put(mutations.setState(data.state));
      yield put(mutations.processAuthUser(mutations.AUTHENTICATED));
      history.push("/dashboard");
    } catch (e) {
      console.log("cant authenticate");
      yield put(mutations.processAuthUser(mutations.NOT_AUTHENTICATED));
    }
  }
}
