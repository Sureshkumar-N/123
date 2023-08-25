import { createStore } from "redux";

function reducer(state={tasks:[]}, action){
    switch (action.type) {
        case "ADD":
            return {tasks:[...state.tasks,{name:action.payload,status:"ToDo",date:new Date().toDateString(),time:new Date().toTimeString().substring(0,8)}]};
        case "DEL":
            return {tasks:[...state.tasks.slice(0,action.payload),...state.tasks.slice(action.payload+1)]};
        case "EDIT":
            const updateTask=[...state.tasks];
            updateTask[action.payload].status="In Progress";
            return {tasks:updateTask};
        default:
            return state;
    }
}

const store=createStore(reducer);
export default store;