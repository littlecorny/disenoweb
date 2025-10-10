import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Proyectos from "./pages/Proyectos";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/proyectos" element={<Proyectos />} />
      <Route path="/sobre-mi" element={<div style={{paddingTop: '100px', padding: '100px 2rem'}}>Página Sobre Mí (En construcción)</div>} />
    </Routes>
  );
}

export default App;