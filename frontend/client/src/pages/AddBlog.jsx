import React, { useState } from 'react';
import axios from 'axios';

const AddBlog = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/api/blogs', formData);
      setMessage('✅ Blog added successfully!');
      setFormData({ title: '', content: '', author: '' });
    } catch (error) {
      console.error(error);
      setMessage('❌ Failed to add blog.');
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto' }}>
      <h2>Add a Blog</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label><br />
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
          />
        </div>
        <div>
          <label>Content:</label><br />
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
            rows="6"
            style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
          />
        </div>
        <div>
          <label>Author:</label><br />
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
          />
        </div>
        <button type="submit" style={{ padding: '10px 20px' }}>Submit</button>
      </form>
      {message && <p style={{ marginTop: '10px' }}>{message}</p>}
    </div>
  );
};

export default AddBlog;