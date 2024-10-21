import "./App.css";
import { Header } from "./components/Header";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Articles } from "./components/Articles";
import { ArticlePage } from "./components/ArticlePage";
import { useState } from "react";

function App() {
  const [user, setUser] = useState("cooljmessy");
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        {/* <Route path="/articles/:topic" element={<Articles />} /> */}
        <Route
          path="/articles/:article_id"
          element={<ArticlePage user={user} />}
        />
      </Routes>
    </>
  );
}

export default App;
