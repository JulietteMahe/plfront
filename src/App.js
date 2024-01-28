import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import Search from './pages/search/Search.jsx';
import Login from './pages/login/Login.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import './App.css';


function App() {


  return (
 
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/search' element={<Search />}/>
        <Route exact path='/login' element={<Login />}/>
      </ Routes>
    </div>

  );
}

export default App;
