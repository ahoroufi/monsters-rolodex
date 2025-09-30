import {useEffect, useState} from 'react';
import './App.css';

const Card = ({name, email}) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  )
}

const App = () => {
  const [monsters, setMonsters] = useState([]); // twople
  console.log(monsters)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setMonsters(data))
  }, [])

  return (
    <>
      {monsters.map(({name, email}, idx) => {
          // <Card name='a'></Card>
          return <Card key={`${name}-${idx}`} name={name} email={email}></Card>
      })}
    </>
  ); 
};

export default App;
