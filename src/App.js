import React from 'react';
import './App.css';
import video from "./videos/sculpture.mp4";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Art Videos</h1>
      </header>
        <div>
          <video src={video} controls height={200} />
        </div>
    </div>
  );
}

export default App;
