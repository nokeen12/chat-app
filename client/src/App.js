import { Routes, Route } from "react-router-dom";
import './App.css';
import {
  Homepage
} from "./pages";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
