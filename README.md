## About This Project

This is a basic client for the Giphy API. Entering a search term and clicking "Search" will return the first 10 gifs for that query. From there you can click on a gif to view it in larger format, or navigate through different pages of results.

The design is responsive and will adjust based on mobile, tablet, and desktop viewport sizes.

### Tech Used

React, SCSS, Google Fonts, React Testing Library, Axios, Create React App

### My Approach

I began by doing some very simple wireframing and settling on a basic layout with app title, search input and button, gif results, and pagination. I decided to go with a "dark theme" and videogame font to be at least somewhat compatible with Giphy's existing brand.

In order to reflect the variety of screen sizes that might be using the app, I designed it across mobile, tablet, and desktop viewports. On mobile, the gifs expand to 100% width and stack vertically. On tablet, the gifs are pegged to a consistent height and render in rows, while the overall content area stretches to fill the screen. And on desktop, the content area has a maximum width and is centered on the screen.

I bootstrapped the app using Create React App, and added the basic dependencies I would need, like `node-sass` and `axios`. I decided to go with SCSS because it would allow me to use variables (i.e. font sizes and colors) and mixins (for media queries), and would thus make the styles easier to maintain and scale.

From there I organized my project directory structure into `components`, `styles`, `helpers`, and `tests`.

I did some preliminary componentization with `Modal` and `Pagination`, creating pure functional components that take basic props and are type-checked with `prop-types`. At the same time I aligned my SCSS files into corresponding partials like `_modal.scss` and `_pagination.scss` for ease of maintainability. I'm using BEM naming convention to keep the SCSS scoped and well organized.

I created an `apiRequests` helper file to export modular functions which make API requests. The first and only one needed here is the `searchGifs` function which calls the Giphy API, while being wrapped in a try/catch to handle errors gracefully. I would normally store API keys in a .env file but this is just a sample project and I want it to be immediately testable by other people without needing to create any files locally.

Finally I added some basic unit tests for the `App` component, checking that it renders correctly, calls the API request with the given search term, shows the modal, and has pagination which works correctly. I created a mock for `apiRequests` which returns a resolved promise with sample data. These are very basic tests, and at a larger scale I would probably aim for 100% test coverage, as well as testing the other components and the `apiRequests` helper functions. But given the time constraints here I just wanted to show an example. I'm using React Testing Library which I have found to be a pleasure to use over Enzyme, and more representative of how a user would interact with an app in practice.

## Available Scripts

In the project directory, you can run:

### `yarn start` or `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test` or `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build` or `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
