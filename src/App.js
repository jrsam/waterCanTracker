import './App.css';
import {ButtonIncrement} from './components/ButtonComponent'
import {ButtonDecrement} from './components/ButtonComponent'
import AddFlat from './components/AddFlat'
import Display from './components/Display';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(1);
  const incrementCounter = () => setCounter(counter + 1);
  let decrementCounter = () => setCounter(counter - 1);
  return (
    <div className="App">
      <header className="App-header">
        <h2>Water Can Tracker</h2>

        <div> 
        <AddFlat></AddFlat>
      <Display message='Enter cans count  '/> 

      <ButtonDecrement onClickFunc={decrementCounter}/>
      <Display message={counter}/> 
      <ButtonIncrement onClickFunc={incrementCounter}/>
    </div>
        
      </header>
    </div>
  );
}

export default App;
