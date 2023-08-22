import React from 'react';
import dynamic from 'next/dynamic';

const DynamicForm = dynamic(() => import('../components/Form'), { clientOnly: true });


const Home = () => {
  return (
    <div>
      <h1>Your Page Title</h1>
      <DynamicForm />
    </div>
  );
};

export default Home;
