import "./App.css";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import EachArticle from "./pages/EachArticle";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:topic" element={<Home />} />
          <Route path="/articles/:article_id" element={<EachArticle />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
