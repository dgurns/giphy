import React from 'react';

const App = () => {
  return (
    <div className="app">
      <h1>Giphy Search</h1>
      <div className="app__search">
        <input placeholder="Enter search term..." />
        <button>Search</button>
      </div>
      <div className="app__results-container">
        <div className="app__result-item" />
        <div className="app__result-item" />
        <div className="app__result-item" />
        <div className="app__result-item" />
        <div className="app__result-item" />
        <div className="app__result-item" />
        <div className="app__result-item" />
        <div className="app__result-item" />
        <div className="app__result-item" />
        <div className="app__result-item" />
      </div>
    </div>
  );
};

export default App;
