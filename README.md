# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## TMDB API START

## API KEY

9160bcf1021e3bcd19bf4b1c6a7d4185

## API read access token

eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTYwYmNmMTAyMWUzYmNkMTliZjRiMWM2YTdkNDE4NSIsIm5iZiI6MTcyNTM5MDg0Ny43NjQ1MjUsInN1YiI6IjY2ZDc1ZjVkZmNiNzVkNGU1MTU2NjAxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iUiDs8j4sPsDMtE0C-5-XdjB4h9YWs6bOCaaz6w_4WQ

## TMDB API END

Firebase info :

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyAbNeR4310hY2sMQBkSNzsiWmqRAk1zhWk",
authDomain: "netflixgpt-70ef8.firebaseapp.com",
projectId: "netflixgpt-70ef8",
storageBucket: "netflixgpt-70ef8.appspot.com",
messagingSenderId: "66576669953",
appId: "1:66576669953:web:be0d05b6f7d32d9c31cf00",
measurementId: "G-8H8VDW7FGZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

#FIREBASE
#-----------------------------------------------------
#During setup I got an error for Firebase setting up for authentication, that "Error Updating Email/Username" -> Resolved by disabling the CORS extension
firebase login
firebase init

"site": "netflixgpt-70ef8-e897d",

firebase deploy --only hosting:netflixgpt-70ef8-e897d
#######################################################
#Project things we did

08/28

- Created a new react app using npm create-create-app Project_name
- Tailwind setup for CSS
- Header
- Login form
- Sign up form
- Routing
- Form validation
- useRef Hook
- Firebase setup
- Firebase Authentication
- Deploying app on Firebae
- Firebase Hosting
- Creating/Implementing Sign up account
- Creating/Implementing Login account
- Creating Redux Store with user slice
- Bugfix : Sign up user displayName on the login page
- Bugfix : Sign in / sign out logic and also redirect user to login page if user tries to directly access /browse page
- Unsubscribed to the onAuthStateChanged callback
- Add hardcoded files to constants page
- Create TMDB account to access movies API
- Register TMDB API and get the list of movie using TMDB API
- Custom hook for now Playing movies
- updated store with movies data basically a movies slice
- Planing for main and secondary container
- Fetch data for trailer videos
- Update store with trailer video data
- Embeded youtube video and made it autoplay and mute
- Custom hook for movie trailers
- Fixed css for trailer videos in background

#Features

- Login/SignUp
  - Sign in / Sign up Form
  - redirect to browse page
- Browse (After authentication)
  - Header
  - Main movie
    - Trailer in background
    - Movie Title
    - Movie Description
  - Movies Suggestions
    - Movie Title \* n (rows)
- Netflix GPT
  - Search bar
  - Movie Suggestions
