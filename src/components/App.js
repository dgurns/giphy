import React, { useState } from 'react';
import { searchGifs } from '../helpers/apiRequests';
import Pagination from './Pagination';
import Modal from './Modal';

const App = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [resultsPage, setResultsPage] = useState(1);
  const [selectedGif, setSelectedGif] = useState(null);

  const onPaginationClicked = (increment = true) => {
    fetchGifs(increment ? resultsPage + 1 : resultsPage - 1);
  };

  const fetchGifs = async (targetResultsPage = 1) => {
    setResultsPage(targetResultsPage);
    setData([]);
    setError('');
    try {
      const results = await searchGifs(searchQuery, targetResultsPage);
      setData(results);
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div className="app">
      <h1>Giphy Search</h1>
      <div className="app__search">
        <input
          type="text"
          placeholder="Enter search term..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        <button onClick={() => fetchGifs()}>Search</button>
      </div>
      <div className="app__results-container">
        {data.map(gif => (
          <img
            className="app__result-item"
            src={gif.images.fixed_height_downsampled.url}
            alt={gif.title}
            key={gif.id}
            onClick={() => setSelectedGif(gif)}
          />
        ))}
        {error}
      </div>
      {data.length > 0 && (
        <Pagination
          currentPage={resultsPage}
          onPageForward={onPaginationClicked}
          onPageBack={() => onPaginationClicked(false)}
        />
      )}
      {selectedGif && (
        <Modal onClose={() => setSelectedGif(null)}>
          <img
            className="modal__image"
            src={selectedGif.images.original.url}
            alt={selectedGif.title}
          />
        </Modal>
      )}
    </div>
  );
};

export default App;
