import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { Route, Routes } from "react-router-dom";
import { FormSubmission } from "../src/components/form/FormSubmission";
function App() {
  return (
    <>
      <Routes>
        <Route path="/about" element={<Home/> } />
        <Route path="/" element={<About/> } />
        <Route path="/Form" element={<FormSubmission/> } />
      </Routes>
    </>
  );
}

export default App;