import "./App.css";
import Home from "./components/pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./components/pages/User/User";

function App() {
  return (
    <BrowserRouter basename="/githubsearch">
      <Routes>
        <Route path="/githubsearch" element={<Home />} />
        <Route path="/user/:login" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;