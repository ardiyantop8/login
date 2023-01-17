import Login from "./components/Login";
import { useState, createContext } from 'react';

export const AppContext = createContext(null);
function App() {
  const [pengguna, setPengguna] = useState(); 
  return (
    <AppContext.Provider value= {{pengguna, setPengguna}}>
      <div className="App">
        <Login />
      </div>
    </AppContext.Provider>
  );
}

export default App;
