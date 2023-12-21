

import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Files/Home';
import Landing from './Files/Landing';
import Login from './Files/Login';
import Sign from './Files/Sign';

function App() {
  return (
    <div>
      <Router>
          <div>
            <Routes>
              <Route path="/" element={<Landing/>}/>
              <Route path="/Home" element={<Home/>}/>
              <Route path="/Sign" element={<Sign/>}/>
              <Route path="/Login" element={<Login/>}/>
            </Routes>
          </div>
      </Router>
      
    </div>
  )
}
export default App;
