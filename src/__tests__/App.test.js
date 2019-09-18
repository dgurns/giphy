import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import App from '../components/App';
import { searchGifs } from '../helpers/apiRequests';

jest.mock('../helpers/apiRequests');

describe('<App /> component', () => {
  beforeEach(() => {
    searchGifs.mockClear();
  });

  it('should render without crashing', () => {
    const { container } = render(<App />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should call searchGifs API request with given term when search is clicked', () => {
    const { getByText, getByPlaceholderText } = render(<App />);
    const searchField = getByPlaceholderText(/Enter search term/i);
    fireEvent.change(searchField, { target: { value: 'dog' } });
    fireEvent.click(getByText('Search'));
    expect(searchGifs).toHaveBeenCalledTimes(1);
    expect(searchGifs).toHaveBeenNthCalledWith(1, 'dog', 1);
  });

  it('should display the modal when a gif is clicked', async () => {
    const { getByText, getByAltText, getByPlaceholderText } = render(<App />);
    const searchField = getByPlaceholderText(/Enter search term/i);
    fireEvent.change(searchField, { target: { value: 'dog' } });
    fireEvent.click(getByText('Search'));
    await wait(() => {
      fireEvent.click(getByAltText('First gif'));
    });
    const modalCloseButton = getByText('Close');
    expect(modalCloseButton).toBeTruthy();
  });

  it('should request the next page of API results when the "Next" button is clicked', async () => {
    const { getByText, getByPlaceholderText } = render(<App />);
    const searchField = getByPlaceholderText(/Enter search term/i);
    fireEvent.change(searchField, { target: { value: 'dog' } });
    fireEvent.click(getByText('Search'));
    expect(searchGifs).toHaveBeenCalledTimes(1);
    expect(searchGifs).toHaveBeenNthCalledWith(1, 'dog', 1);
    await wait(() => {
      fireEvent.click(getByText('>'));
    });
    expect(searchGifs).toHaveBeenCalledTimes(2);
    expect(searchGifs).toHaveBeenNthCalledWith(2, 'dog', 2);
    fireEvent.click(getByText('>'));
    expect(searchGifs).toHaveBeenCalledTimes(3);
    expect(searchGifs).toHaveBeenNthCalledWith(3, 'dog', 3);
  });
});
