import {Routes, Route} from "react-router-dom";
import LandingPage from './pages/LandingPage';
import LogIn from './pages/LogIn';
import Register from './pages/Register';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LandingPage/>}/>
        <Route exact path="/login" element={<LogIn/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/:panel" element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App
