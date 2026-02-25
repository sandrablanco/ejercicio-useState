import { useState } from 'react';
import ReactDom from 'react-dom/client';


function App() {
const [name, setName] = useState("Danel");
const [newName, setnewName] = useState("");


const changeName = () =>{
  if (newName.trim() !== "") {
  setName(newName);
  setNewName("");
 }
}

  return (
    <div>
      <h2>Teacher Name: {name}</h2>

      <ul>
        <li onClick={() => setName("Data")}>Data</li>
        <li onClick={() => setName("Reyes")}>Reyes</li>
        <li onClick={() => setName("Soraya")}>Yolanda</li>
      </ul>
      <input type="text" value={newName} onChange={(e) => setnewName(e.target.value)} placeholder="add a name" />
        <button type="button" onClick={changeName}>
        Add
      </button>
    </div>
  );
}

export default App;

