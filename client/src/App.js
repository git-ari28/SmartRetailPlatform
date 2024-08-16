import React from 'react';
import { BrowserRouter as Router, Route, Routes } 
from 'react-router-dom';
import Home from './components/Home';
import Shop from './components/Shop';
import VirtualTryOn from './components/VirtualTryOn';
import PopupChatbot from './components/PopupChatbot';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/virtualtryon" element={<VirtualTryOn />} />
      </Routes>
      <PopupChatbot />
    </Router>
  );
}

export default App;



