import logo from './logo.svg';
import './App.css';
import TodoList from './ToDoList';
import Language from './Language';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TodoList
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
        />
        <Language/>
      </header>
    </div>
  );
}

export default App;
