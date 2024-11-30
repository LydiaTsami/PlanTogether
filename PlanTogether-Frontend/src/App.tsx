import Login from "./components/Login/Login.tsx";
import Register from "./components/Register/Register.tsx";
import {Link, Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home.tsx";

function App() {
  return (
      <div>
          <nav>
              <ul>
                  <li>
                      <Link to="/">Home</Link>
                  </li>
                  <li>
                      <Link to="/login">Login</Link>
                  </li>
                  <li>
                      <Link to="/register">Register</Link>
                  </li>
              </ul>
          </nav>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/register" element={<Register/>}/>
          </Routes>
      </div>
  )
}

export default App
