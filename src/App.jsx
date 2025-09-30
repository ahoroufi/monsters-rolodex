import {useEffect, useState} from 'react';
import './App.css';

const Card = (props) => {
  return <div>{props.name}</div>;
}

const App = () => {
  const [arr, setArr] = useState(['a', 'b', 'c', 'd', 'e', 'f']); // twople

  useEffect(() => {
    console.log('running side effects');
  }, [])

  return (
    <>
      {arr.map((name, idx) => {
          // <Card name='a'></Card>
          return <Card key={`${name}-${idx}`} name={name}></Card>
      })}

      <button
        onClick={
          () => {
            setArr((arr)=> [...arr, 'x']);
          }
        }
      >
        Add letter
      </button>
    </>
  ) 
}

export default App;
