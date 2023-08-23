import { createStore } from "redux";

function reducer(state={tasks:[]}, action){
    switch (action.type) {
        case "ADD":
            return {tasks:[...state.tasks,action.payload]};
        case "DEL":
            return {tasks:[...state.tasks.slice(0,action.payload),...state.tasks.slice(action.payload+1)]};
        default:
            return state;
    }
}

const store=createStore(reducer);
export default store;