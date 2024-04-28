import React from 'react';
 import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollTracker from './components/scroll-tracker';
import RenderButton from './components/render-button';

function App() {
  return (
    <Routes>
      <Route path="/" element={<RenderButton />} />
    </Routes>
  );
}

export default App;