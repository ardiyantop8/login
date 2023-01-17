import Login from "./components/Login";
import { useState, createContext } from 'react';

export const AppContext = createContext(null);
function App() {
  const [pengguna, setPengguna] = useState(); 
  return (
      <div className="App">
        <Login />
      </div>
  );
}

export default App;
