import './App.css';
import { useRef} from 'react';
import List from './List';
import {useDispatch} from 'react-redux';
function App() {
  const inputRef = useRef();
  const dispatch=useDispatch();
  const addTask =(task)=>{
    dispatch({
      type:"ADD",
      payload:task
    });
  };
  return (
    <div className="app">
      <div className='field'>
        <input ref={inputRef} placeholder='enter your task'/>
        <button onClick={()=>{addTask(inputRef.current.value)}}>Add</button>
      </div>
      <div className='tasks'>
        <List/>
      </div>
    </div>
  );
}


export default App;
