import './App.css';

const Card = (props) => {
  return <div>{props.name}</div>;
}

const App = () => {
  const arr = ['a', 'b', 'c', 'd', 'e', 'f'];
  return (
    <>
      {arr.map((name, idx) => (
          // <Card name='a'></Card>
          <Card key={`${name}-${idx}`} name={name}></Card>
      ))}
    </>
  ) 
}

export default App;
