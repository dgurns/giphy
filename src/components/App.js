import React, { Component } from 'react';
import { searchGifs } from '../helpers/apiRequests';

class App extends Component {
  state = {
    searchQuery: '',
    results: [],
    resultsPage: 1,
    error: ''
  };

  async onSearchClicked() {
    const { searchQuery, resultsPage } = this.state;
    this.setState({ error: '' });
    try {
      const results = await searchGifs(searchQuery, resultsPage);
      this.setState({ results });
    } catch (e) {
      this.setState({ error: e.message });
    }
  }

  render() {
    const { searchQuery } = this.state;

    return (
      <div className="app">
        <h1>Giphy Search</h1>
        <div className="app__search">
          <input
            type="text"
            placeholder="Enter search term..."
            value={searchQuery}
            onChange={e => this.setState({ searchQuery: e.target.value })}
          />
          <button onClick={this.onSearchClicked.bind(this)}>Search</button>
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
  }
}

export default App;
