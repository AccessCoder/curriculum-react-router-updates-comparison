import './App.css'
import Counter from "./Counter.tsx";
import Counter2 from "./Counter2.tsx";
import {createBrowserRouter, Link, RouterProvider} from "react-router-dom";
import Navbar from "./Navbar.tsx";

function App() {

    const customRoutes = createBrowserRouter([
        {
            path: '/',
            element: <Counter/>,
            errorElement: <div>Oops, something went wrong!</div>,
        },
        {
            path: '/multiply',
            element: <Counter2/>,
            errorElement: <div>Oops, something went wrong!</div>,
        },
    ]);

    return (
        <>
            <Navbar/>
            <RouterProvider router={customRoutes}/>
        </>
    )
}

export default App


