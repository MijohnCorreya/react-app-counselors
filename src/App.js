import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Leistungen from './Pages/Leistungen/Leistungen'

//Routing section for the application
//Included Routing for Home and Leistungen Components
function App() {
  return (
      <>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/leistungen' element={<Leistungen />} />
          </Routes>
        </Router>
      </>
  );
}

export default App;
