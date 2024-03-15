
import React, {useState, useEffect} from 'react';
import RegistrarUsuario from './pages/Registro';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RegistrarUsuario />
    </>
  )
}

export default App
