import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BlackNav } from './components/BlackNav';
import { MyNav } from "./components/MyNav";
import { Home } from "./components/Home";
import { About } from "./components/About";

function App() {
  return (
    <>
      <MyNav />
   <About/>
    </>
  );
}

export default App;