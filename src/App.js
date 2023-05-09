import logo from './logo.svg';
import './App.css';
import TodoList from './ToDoList';
import Language from './Language';
import { ClickCounter } from './ClickCounter';
import Login from './Login';
import Counter from './Counter';
import GithubUser from './GithubUser';

function App() {

  const handleCounterChange = (value) => {
    console.log(`Counter value changed: ${value}`);
  };


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <TodoList
          render={(items, removeItem) => (
            <ul>
              {items.map((item, index) => (
                <li key={index}>
                  {item}
                  <button onClick={() => removeItem(index)}>Remove</button>
                </li>
              ))}
            </ul>
          )}
        /> */}
        {/* <Language/> */}
        <ClickCounter onCounterChange={handleCounterChange}/>
        <Login/>
        <Counter/>
        <GithubUser/>
      </header>
    </div>
  );
}

export default App;
