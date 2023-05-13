import logo from './logo.svg';
import './App.css';
import TodoList from './ToDoList';
import Language from './Language';
import { ClickCounter } from './ClickCounter';
import Login from './Login';
import Counter from './Counter';
import GithubUser from './GithubUser';
import GithubUserList from './GithubUserList';
import { UseCounterComponent } from './UseCounter';

function App() {

  const handleCounterChange = (value) => {
    console.log(`Counter value changed: ${value}`);
  };


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ClickCounter onCounterChange={handleCounterChange}/>
        <UseCounterComponent/>
      </header>
    </div>
  );
}

export default App;
