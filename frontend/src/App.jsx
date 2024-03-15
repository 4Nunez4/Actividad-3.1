import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registro from "./pages/Registro";

function App() {
return (
<BrowserRouter>
<Routes>
<Route path="/" element={<Registro />} />
</Routes>
</BrowserRouter>
  )
}

export default App
