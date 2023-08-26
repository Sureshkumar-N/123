import { createStore } from "redux";

function reducer(state={tasks:[],complete:[]}, action){
    switch (action.type) {
        case "ADD":
           return {
            ...state,
            tasks: [
                ...state.tasks,
                {
                    name: action.payload,
                    status: "ToDo",
                    date: new Date().toDateString(),
                    time: new Date().toTimeString().substring(0, 8)
                }
            ]
        };
        case "DEL":
           return {
            ...state,
            tasks:[
                ...state.tasks.slice(0,action.payload),...state.tasks.slice(action.payload+1)
            ]
           };
        case "EDIT":
            return {
                ...state,
                tasks:state.tasks.map((task,i)=>{
                    if(i===action.payload) {
                        return {
                            ...task,
                            status:"Inprogress"
                        };
                    }
                    return task;
                })
            }
        case "COMP":
            return {
                ...state,
                complete:[
                    ...state.complete,
                    {
                        name:state.tasks[action.payload].name,
                        status:"Completed",
                        date: new Date().toDateString(),
                        time: new Date().toTimeString().substring(0, 8)
                    }
                ],
                tasks:[
                    ...state.tasks.slice(0,action.payload),...state.tasks.slice(action.payload+1)
                ]
            };
        default:
            return state;
    }
}
const store=createStore(reducer);
export default store;
