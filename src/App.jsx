import { useState } from 'react';
import './App.css';
import TofoFrom from './component/Todo/TofoFrom';
import TodoProvider from './context/TodoProvider';



function App() {
  const [count , setCount] = useState(0);

  return (
    <TodoProvider>
    <div className='border'>
       < TofoFrom/>
      {/* <FromUser></FromUser>
      <h2>count : {count}</h2>
      <h2>count : { 100  - count}</h2>
      <ClassComponent></ClassComponent>
      <FunctionComponent count={count} setCount={setCount} ></FunctionComponent> */}
    </div>
    </TodoProvider>
  )
}

export default App
