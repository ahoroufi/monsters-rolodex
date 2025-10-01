import {useEffect, useState} from 'react';

import CardList from './components/card-list/card-list.component';

import './App.css';



const App = () => {
  const [monsters, setMonsters] = useState([]); // twople

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setMonsters(data))
  }, [])

  return (
    <>
      <CardList monsters={monsters} />
    </>
  ); 
};

export default App;
