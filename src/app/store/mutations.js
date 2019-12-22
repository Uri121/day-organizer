export const REQUSET_TASK_CREATION = 'REQUSET_TASK_CREATION';
export const CREATE_TASK = 'CREATE_TASK';
export const SET_TASK_COMPLETE = 'SET_TASK_COMPLETE';
export const SET_TASK_GROUP = 'SET_TASK_GROUP';
export const SET_TASK_NAME = 'SET_TASK_NAME';
export const REQUSER_AUTH_USER = 'REQUSER_AUTH_USER';
export const PROCESSING_AUTH_USER = 'PROCESSING_AUTH_USER';
export const AUTHENTICATING='AUTHENTICATING';
export const AUTHENTICATED='AUTHENTICATED';
export const NOT_AUTHENTICATED='NOT_AUTHENTICATED';
export const SET_STATE = 'SET_STATE';

export const requsetTaskCreation = (groupID)=>({
    type:REQUSET_TASK_CREATION,
    groupID
});

export const createTask=(taskID,groupID,ownerID)=>({
    type:CREATE_TASK,
    taskID,
    groupID,
    ownerID
});

export const setTaskCompletion=(id,isComplete)=>({
    type:SET_TASK_COMPLETE,
    taskID:id,
    isComplete
});

export const setTaskName=(id,name)=>({
    type:SET_TASK_NAME,
    taskID:id,
    name
});

export const setTaskGroup=(id,groupID)=>({
    type:SET_TASK_GROUP,
    taskID:id,
    groupID
});

export const requsetAuthUser=(userName,password)=>({
    type:REQUSER_AUTH_USER,
    userName,
    password
});

export const processAuthUser=(status=AUTHENTICATING,session=null)=>({
    type:PROCESSING_AUTH_USER,
    session,
    auth: status
});

export const setState=(state={})=>({
    type:SET_STATE,
    state

});