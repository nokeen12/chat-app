import { Routes, Route } from "react-router-dom";
import './App.css';
import {
  Homepage,
  Chatpage,
} from "./pages";
import { useContext } from 'react';
import { AuthContext } from "./context/auth.context";

function App() {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <div className="App">
      <Routes>
        <Route path="/l" element={<Homepage />} />
        <Route path="/" element={isLoggedIn ? <Chatpage /> : <Homepage />} />
        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
