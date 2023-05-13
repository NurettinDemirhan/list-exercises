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
import FormComponent from './UseFormState';
import CarDetails from './CarDetails';
import { useState } from 'react';
import FilteredList from './FilteredList';

function App() {

  const list =[
    {
      name:"nuri1",
      id: 1,
      age: 19
    },
    {
      name:"nuri2",
      id: 1,
      age: 15
    },
    {
      name:"nuri3",
      id: 3,
      age: 11
    }
  ]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <UseCounterComponent/>
        <FilteredList list={list}/>
      </header>
    </div>
  );
}

export default App;