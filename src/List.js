import { useDispatch, useSelector } from "react-redux";
import Tick from './tick.png';
import Edit from './edit.svg';
import Delete from './delete.svg';
export default function List(){
    const tasks=useSelector((state)=>state.tasks);
    const completetask=useSelector((state)=>state.complete);
    console.log(completetask);
    const dispatch =useDispatch();
    const deletetask=(id)=>{
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
    const complete=(id)=>{
        dispatch({
            type:"COMP",
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
                                <span>Status: {task.status}</span>
                                <span>Day: {task.date}</span>
                                <span>Time: {task.time}</span>
                                <img src={Tick}  alt="click" onClick={()=>complete(i)}/>
                                <img src={Edit} alt="edit" onClick={()=>edit(i)}/>
                                <img src={Delete} alt="delete" onClick={()=>deletetask(i)}/>
                            </div>
                        );
                    })
                }
        </div>
    );
}