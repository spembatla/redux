import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Result from './action';

function App() {

  const dispatch = useDispatch();
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  

  const handleNum1 = (e) =>{
    const value = e.target.value;
    if(!isNaN(value)){
      setNum1(Number(value));
      dispatch({type: 'num1', payload: Number(value)});
    }
  }

  const handleNum2 = (e) =>{
    const value = e.target.value;
    if(!isNaN(value)){
      setNum2(Number(value));
      dispatch({type: 'num2', payload: Number(value)});
    }
  }

  const handleAdd = () => {
    const r = num1 + num2 ;
    dispatch({type: 'result', payload: r});
  }

  const handleSub = () => {
    const r = num1 - num2 ;
    dispatch({type: 'result', payload: r});
  }


  return (
    <div className="App">
      <Result/>
      <input placeholder='Enter Number1' onChange={handleNum1} />
      <input placeholder='Enter Number2' onChange={handleNum2} />
      <div>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSub}>Sub</button>
      </div>
    </div>
  );
}

export default App;
