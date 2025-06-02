import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddBlog from './pages/AddBlog';
import ViewBlogs from './pages/ViewBlogs';
import './App.css';

function App() {
  return (
    <Router>
      <header className="header">
        <h1>Bloggies</h1>
        <Link to="/add" className="nav-button">Add Blog</Link>
        <Link to="/" className="nav-button">View Blogs</Link>
      </header>
      <div className="container">
        <Routes>
          <Route path="/" element={<ViewBlogs />} />
          <Route path="/add" element={<AddBlog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
