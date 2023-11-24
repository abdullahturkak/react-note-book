import './App.css';
import { useState } from 'react';
import './List.js';

let nextId = 0;

function App() {
  return (
    <div className="App">
      <div className="Form">
        <h1/>Name <input />
      </div>



      <div className="Form">
        <h1/>Notes <input type="text" />
      </div>




      <div className="Button">
        <p>
        <button>Send Notes</button>
        </p>
      </div>
    </div>
  );
}

export default App;
