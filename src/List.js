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
    const edit=(id) =>{
        dispatch({
            type:"EDIT",
            payload:id
        });
    }
    return(
        <div className="list">
            <table className="table">
                <div>
                    <tr>
                        <th>No</th>
                        <th>Task Name</th>
                        <th>Status</th>
                        <th>Edit</th>
                        <th>Remove</th>
                    </tr>
                </div>
                <div className="box"></div>
                <div className="tr">
                {
                    tasks.map((task,i)=>{
                        return (<tr key={i}>
                            <td>{i+1}</td>
                            <td>{task.name}</td>
                            <td>{task.status}</td>
                            <td><button onClick={()=>{edit(i)}}>X</button></td>
                            <td><button>Y</button></td>
                        </tr>);
                    }) 
                }
                </div>
            </table>
        </div>
    );
}