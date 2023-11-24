import { useState } from 'react';

let nextId = 0;

export default function List() {
  const [name, setName] = useState('');
  const [notes, setNotes] = useState([]);

  return(name, notes, setName, setNotes);

}