import { take, put, select } from "redux-saga/effects";
import * as mutations from './mutations';
import uuid from 'uuid';

export default function* taskCreationSaga(){
    while(true){
      const {groupID} =  yield take(mutations.REQUSET_TASK_CREATION);
      const ownerID ='U1';
      const taskID = uuid();
      yield put(mutations.createTask(taskID,groupID,ownerID));
      console.log("Got groud ID",groupID);
    }
}
