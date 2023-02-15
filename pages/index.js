import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';

const Home = () => {
  const [userInput, setUserInput] = useState('');
  const onUserChangedText = (event) => {
    console.log(event.target.value);
    setUserInput(event.target.value);
  };
  return (
    <div className="root">
      <Head>
        <title>GPT-3 project</title>
      </Head>
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>this will get a text later</h1>
          </div>
          <div className="header-subtitle">
            <h2>insert your subtitle here</h2>
          </div>
        </div>
        {/* Add this code here*/}
        <div className="prompt-container">
        <textarea
            className="prompt-box"
            placeholder="start typing here"
            value={userInput}
            onChange={onUserChangedText}
          />;
        </div>
      </div>
    </div>
  );
};

export default Home;
