import "./App.css";
import { Header } from "./components/Header";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Articles } from "./components/Articles";
import { ArticlePage } from "./components/ArticlePage";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:article_id" element={<ArticlePage />} />
      </Routes>
    </>
  );
}

export default App;
