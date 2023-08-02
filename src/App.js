import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/about" element={<Home/> } />
        <Route path="/" element={<About/> } />
      </Routes>
    </>
  );
}

export default App;