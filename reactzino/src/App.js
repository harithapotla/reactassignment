import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter';
import Todolist from './Components/Todolist';



function App() {
  return (
    <div className="App">
    <h1>My first assignment on React</h1>
    <Counter start={2}  step={2}></Counter><hr></hr><hr/>
    <Todolist></Todolist>
    </div>
  );
}

export default App;
