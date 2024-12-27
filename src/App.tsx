import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from "./Counter.tsx";
import Counter2 from "./Counter2.tsx";

function App() {


  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

    </>
  )
}

export default App

const routesConfig = [
  { path: "/", element: <Counter /> },
  { path: "/about", element: <Counter2 /> },
];

function AppRoutes() {
  return useRoutes(routesConfig);
}
