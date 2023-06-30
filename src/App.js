import React, {  } from "react";
import "./App.css";
 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
 
import Header from './Component/Header';
import Home from './Component/Home';
import Citationlist from './Component/Citationlist';
import Authorlist from './Component/Authorlist';
function App() {
  return (
    <div className="App">
        <Router>
            <Header/>
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/citationlist" element={<Citationlist/>}/> 
              <Route exact path="/authorlist" element={<Authorlist/>}/> 
            </Routes>
        </Router>
        
 </div>
  );
}
 
export default App;