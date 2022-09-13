import { Routes, Route } from "react-router-dom";
import './App.css';
import {
  Homepage,
  Chatpage,
} from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/l" element={<Homepage />} />
        <Route path="/" element={<Chatpage />} />
        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
