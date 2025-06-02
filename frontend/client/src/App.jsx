import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddBlog from './pages/AddBlog';
import ViewBlogs from './pages/ViewBlogs';

function App() {
  return (
    <Router>
      <nav style={{ display: 'flex', gap: '20px', padding: '20px', background: '#eee' }}>
        <Link to="/">View Blogs</Link>
        <Link to="/add">Add Blog</Link>
      </nav>
      <Routes>
        <Route path="/" element={<ViewBlogs />} />
        <Route path="/add" element={<AddBlog />} />
      </Routes>
    </Router>
  );
}

export default App;