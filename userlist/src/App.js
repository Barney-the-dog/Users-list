import './App.css';
import Header from './components/Header/Header';
import Userlist from './components/Userlist/Userlist';
import React, { useState, useEffect } from 'react'
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer'

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
    <Main users={users}/>
    <Footer />
    </>
  );
}

export default App;
