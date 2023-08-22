"use client";
import React from 'react';
import  { useState } from 'react';

const Form = () => {
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState('');
  
    const handleInputChange = (e) => {
      setInputValue(e.target.value);
      setError('');
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (!inputValue.trim()) {
        setError('Field is empty');
        return;
      }
  
      try {
        const response = await fetch('https://api.network-leads.com/post', {
          method: 'POST',
          body: JSON.stringify({ data: inputValue }),
          headers: { 'Content-Type': 'application/json' }
        });
  
        const data = await response.json();
        console.log('Response:', data);
        setInputValue('');
      } catch (error) {
        console.error('Error:', error);
      }
    };
  
    return (
      <form className="max-w-md mx-auto mt-8" onSubmit={handleSubmit}>
        <input
          className={`w-full border rounded px-3 py-2 ${error ? 'border-red-500' : ''}`}
          type="text"
          placeholder="Enter something..."
          value={inputValue}
          onChange={handleInputChange}
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        <button
          className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          type="submit"
        >
          Submit
        </button>
      </form>
    );
  };
  
  export default Form;