import './App.css';
import { useState } from 'react';


export default function App() {
  const [name, setName] = useState('');
  const [myArray, setMyArray] = useState([]);
  const handleAdd = () => {
    setMyArray([...myArray, name]);

  };
  return (
    <div className="App">
      <input
        placeholder="Lütfen Not Giriniz"
        onChange={(e) => setName(e.target.value)}
      />
      <p></p>
      <button onClick={handleAdd}>add</button>
      <p></p>
      <button onClick={() => console.log(myArray)}>test</button>
      {myArray.map((n) => {
        return <h2>{n}</h2>;
      })}
    </div>
  );
}