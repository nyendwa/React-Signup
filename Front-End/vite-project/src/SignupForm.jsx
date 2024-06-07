import React, { useState } from 'react';
import axios from 'axios';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !fullName || !username || !password) {
      alert('All fields are required');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8081/signup', {
        email,
        fullName,
        username,
        password
      });
      console.log(response.data);
      alert('Signup successful');
      setEmail('');
      setFullName('');
      setUsername('');
      setPassword('');
    } catch (error) {
      console.error('Error signing up:', error.response ? error.response.data : error.message);
      alert('Error signing up. Please try again later.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        Full Name:
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
      </label>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <button type="submit">Sign up</button>
    </form>
  );
};

export default SignupForm;
