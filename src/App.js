import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import EachArticle from "./pages/EachArticle";
import SwitchUserProfile from "./pages/SwitchUserProfile";
import { useState } from "react";
import { UserContext } from "./contexts/User";

function App() {
  const [user, setUser] = useState("");

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <div className="App">
          <Header />
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:topic" element={<Home />} />
            <Route path="/articles/:article_id" element={<EachArticle />} />
            <Route path="/users" element={<SwitchUserProfile />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
