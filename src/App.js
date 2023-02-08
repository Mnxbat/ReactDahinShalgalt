import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import HomePage from './Container/HomePage';
import BlackText from './Container/Pages/BlackText';
import BlueText from './Container/Pages/Bluetext';
import RedText from './Container/Pages/RedText';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/body/text1" element={<BlueText />} />
        <Route path="/body/text2" element={<RedText/>} />
        <Route path="/body/text3" element={<BlackText/>} />
      </Routes>   
   </BrowserRouter>
  );
}

export default App;
