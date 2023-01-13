import MainPage from './components/MainPage.js'
import ContactPage from './components/ContactPage.js'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./components/ErrorPage";

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
