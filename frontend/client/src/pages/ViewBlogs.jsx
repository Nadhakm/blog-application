import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/blogs');
        setBlogs(res.data);
      } catch (err) {
        setError('Failed to fetch blogs');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div style={{ maxWidth: '800px', margin: 'auto' }}>
      <h2>All Blogs</h2>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {blogs.length === 0 && !loading ? (
        <p>No blogs found.</p>
      ) : (
        blogs.map((blog) => (
          <div key={blog._id} style={{ border: '1px solid #ccc', padding: '15px', marginBottom: '15px', borderRadius: '8px' }}>
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
            <p><strong>Author:</strong> {blog.author}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ViewBlogs;