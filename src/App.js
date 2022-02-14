
import './App.css';

import { Routes, Route } from "react-router-dom";
import Home from './components/home/Home';
import TourDetails from './components/TourDetails/TourDetails'


function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Tour/:id" element={<TourDetails />} />
       
         
      </Routes>
    
    
    </>
 );
}

export default App;
