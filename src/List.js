import { useDispatch, useSelector } from "react-redux";
import Tick from './tick.png';
export default function List(){
    const tasks=useSelector((state)=>state.tasks);
    const dispatch =useDispatch();
    const delTask=(id)=>{
        dispatch(
            {
                type:"DEL",
                payload:id
            }
        );
    }
    const edit=(id) =>{
        dispatch({
            type:"EDIT",
            payload:id
        });
    }
    
    return(
        <div className="list">
                {
                    tasks.map((task,i)=>{
                        return(
                            <div className="task" key={i} >
                                <span>Task: {task.name}</span>
                                <span>Day: {task.date}</span>
                                <span>Time: {task.time}</span>
                            </div>
                        );
                    })
                }
        </div>
    );
}