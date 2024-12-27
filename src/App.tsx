import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {NavLink, Route, Routes} from "react-router-dom";
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
        <>
            <NavLink to={"/"}>MainPage</NavLink>
            <NavLink to={"/multiply"}>MultiplyPage</NavLink>
        </>
      <Routes>
        <Route path={"/"} element={<Counter/>}/>
        <Route path={"/multiply"} element={<Counter2/>}/>
      </Routes>
    </>
  )
}

export default App
