import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Operations from './components/Operations';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/operations" element={<Operations/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
