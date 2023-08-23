import { useDispatch, useSelector } from "react-redux";
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
    if(!tasks.length) {
        return(
            <h1>No task</h1>
        );
    }
    return(
        <div className="list">
            <ul>
                {
                    tasks.map((task,i)=>{
                        return <li key={i}>{task} <button onClick={()=>delTask(i)}>DEL</button></li>
                })}
            </ul>
        </div>
    );
}