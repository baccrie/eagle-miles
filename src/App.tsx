import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogPage from "./pages/BlogPage";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
