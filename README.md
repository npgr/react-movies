# React Movies

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

The list of complete project dependencies can be found on file `package.json`, the main libraries used for this project are:

- react 17.x
- redux-toolkit
- RTK Query
- typescript
- react-router 6.x
- semantic-ui-react
- styled-components
- jest
- react-testing-library (@testing-library/react)

It is used the [TMDB API](https://www.themoviedb.org/documentation/api). Because of this you need an api key for running the app on file `/src/api/movies.ts`. [How do I apply for an API key?](https://www.themoviedb.org/documentation/api)

Thanks TMDB guys:

<img src="./tmdb.svg" alt="TMDB" width="250" style="margin: 30px"/>

## Next improvements:

### 1.Persist list of favorites and My list:

Right now favorites and my list is not saved, they lost when reload page. The next improvement will be use [redux-persist](https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist) for store in browser localstorage

### 2.Load more than one page of searched movies:

Now it's only loaded first page of movies, the idea is to implement load next page at end of scroll list

### Note:

The api key is now on frontend code, this is not a 'real world' implementation, some alternatives:
- server environment value
- api gateway where is secured the api key
- use a fullstack framework like Next.js
## Available Scripts

In the project directory, you can run:

### `npm start` or `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test` or `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
