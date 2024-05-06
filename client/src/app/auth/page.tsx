'use client';  // This line marks this component to run on the client-side

import React, { useState } from 'react';
import Link from 'next/link';

const AuthPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Register

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    const url = isLogin ? '/api/login' : '/api/register';

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    console.log(data); // Handle response accordingly
  };

  return (
    <div className="flex min-h-screen bg-gray-100 justify-center items-center">
      <div className="p-6 bg-white rounded shadow-md">
        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-lg font-bold text-center">{isLogin ? 'Login' : 'Register'}</h2>
          <div>
            <label htmlFor="email" className="text-sm font-medium text-gray-700 block mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div>
            <label htmlFor="password" className="text-sm font-medium text-gray-700 block mb-2">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            {isLogin ? 'Sign In' : 'Register'}
          </button>
          <div className="text-center">
            <a className="text-blue-500 hover:underline cursor-pointer" onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? 'Need an account? Register' : 'Already have an account? Login'}
            </a>
          </div>
        </form>
        <div className="mt-4">
          <button onClick={() => window.location.href = '/auth/google'} className="w-full py-2 px-4 bg-red-500 text-white rounded hover:bg-red-700">Login with Google</button>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
