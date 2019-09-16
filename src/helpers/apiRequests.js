import axios from 'axios';

const GIPHY_API_ENDPOINT = 'https://api.giphy.com/v1/gifs/search';
const GIPHY_API_KEY = 'bKenxoSj2MMDE6GXV1icMmPfJZZyDWnM';
const NUMBER_OF_RESULTS = 10;

export const searchGifs = async (query, resultsPage = 1) => {
  try {
    const response = await axios.get(GIPHY_API_ENDPOINT, {
      params: {
        api_key: GIPHY_API_KEY,
        q: query,
        limit: NUMBER_OF_RESULTS,
        offset: NUMBER_OF_RESULTS * (resultsPage - 1)
      }
    });
    return response.data.data;
  } catch (e) {
    throw new Error('Error fetching gifs. Please try again.');
  }
};
