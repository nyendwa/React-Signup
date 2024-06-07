import React, { useState } from 'react';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import './App.css';

const App = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  return (
    <div className="container">
      <div className="card">
        {isLoginForm ? (
          <>
            <LoginForm />
            <button className="toggle-button" onClick={() => setIsLoginForm(false)}>
              Don't have an account? Sign up
            </button>
          </>
        ) : (
          <>
            <SignupForm />
            <button className="toggle-button" onClick={() => setIsLoginForm(true)}>
              Already have an account? Log in
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
