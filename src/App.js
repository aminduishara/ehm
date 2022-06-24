import './App.css';
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Reservation from "./pages/Reservation";
//Helloo 

const navClassName = "nav-link";
const navActiveClassName = "nav-link active";
function App() {
  return (
    <div className="App">
      <header>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink to="/" className={({ isActive }) =>
                    isActive ? navActiveClassName : navClassName
                  }>Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/reservation" className={({ isActive }) =>
                    isActive ? navActiveClassName : navClassName
                  }>Rooms</NavLink>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <div className="input-group">
                  <input className="form-control custom_search" type="search" placeholder="Search" aria-label="Search" />
                  <span className="input-group-text custom_icon" id="basic-addon1"><i className="fa-solid fa-magnifying-glass"></i></span>
                </div>
              </form>
            </div>
          </div>
        </nav>
        <div className="container pt-2">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="reservation" element={<Reservation />} />
          </Routes>
        </div>
      </header>
    </div>
  );
}

export default App;
