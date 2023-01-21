import MainPage from './components/MainPage.js'
import ContactPage from './components/ContactPage.js'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAaMCY0yZdokziRokpqwJGi5o7z8MgyfLU",
    authDomain: "my-productions-43588.firebaseapp.com",
    projectId: "my-productions-43588",
    storageBucket: "my-productions-43588.appspot.com",
    messagingSenderId: "637715081214",
    appId: "1:637715081214:web:fc3a306576090ff0d782af",
    measurementId: "G-PEHWK5CW27"
};

initializeApp(firebaseConfig);

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage/>,
        errorElement: <ErrorPage/>
    },
    {
        path: '/contact',
        element: <ContactPage/>,
    }
]);

function App() {
  return <RouterProvider router={router}/>
}

export default App;
