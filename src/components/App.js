import React, { Component } from 'react';
import { searchGifs } from '../helpers/apiRequests';
import Pagination from './Pagination';
import Modal from './Modal';

class App extends Component {
  state = {
    searchQuery: '',
    results: [],
    resultsPage: 1,
    error: '',
    modalVisible: false,
    selectedGif: null
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.resultsPage !== this.state.resultsPage) {
      this.fetchGifs();
    }
  }

  onPaginationClicked = (increment = true) => {
    const { resultsPage } = this.state;
    const updatedResultsPage = increment ? resultsPage + 1 : resultsPage - 1;
    this.setState({ resultsPage: updatedResultsPage });
  };

  onSearchClicked = () => {
    this.setState({ resultsPage: 1 }, () => this.fetchGifs());
  };

  async fetchGifs() {
    const { searchQuery, resultsPage } = this.state;
    this.setState({ error: '', results: [] });
    try {
      const results = await searchGifs(searchQuery, resultsPage);
      this.setState({ results });
    } catch (e) {
      this.setState({ error: e.message });
    }
  }

  onGifClicked = gif => {
    this.setState({ selectedGif: gif, modalVisible: true });
  };

  renderModal() {
    const { modalVisible, selectedGif } = this.state;
    if (modalVisible && selectedGif) {
      const { images, title } = selectedGif;
      return (
        <Modal
          onClose={() =>
            this.setState({ modalVisible: false, selectedGif: null })
          }
        >
          <img className="modal__image" src={images.original.url} alt={title} />
        </Modal>
      );
    }
  }

  render() {
    const { searchQuery, results, resultsPage, error } = this.state;

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
          {results.map(gif => (
            <img
              className="app__result-item"
              src={gif.images.fixed_height_downsampled.url}
              alt={gif.title}
              onClick={() => this.onGifClicked(gif)}
            />
          ))}
          {error}
        </div>
        {results.length > 0 && (
          <Pagination
            currentPage={resultsPage}
            onPageForward={() => this.onPaginationClicked()}
            onPageBack={() => this.onPaginationClicked(false)}
          />
        )}
        {this.renderModal()}
      </div>
    );
  }
}

export default App;
