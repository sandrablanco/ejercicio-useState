import { useState } from 'react';
import ReactDom from 'react-dom/client';

function App() {
const [name, setName] = useState("Danel");

  return (
    <div>
      <h2>Teacher Name: {name}</h2>

      <ul>
        <li onClick={() => setName("Data")}>Data</li>
        <li onClick={() => setName("Reyes")}>Reyes</li>
        <li onClick={() => setName("Soraya")}>Yolanda</li>
      </ul>
    </div>
  );
}

export default App;

