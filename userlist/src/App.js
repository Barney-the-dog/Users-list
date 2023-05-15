import './App.css';
import Header from './components/Header/Header';
import Userlist from './components/Userlist/Userlist';
import React, { useState, useEffect } from 'react'

function App() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => setUsers(json))
},[])

function add() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => setUsers(prev => [...prev, ...json]))
}

  return (
    <>
    <Header add={add}/>
    <Userlist users={users}/>
    </>
  );
}

export default App;
