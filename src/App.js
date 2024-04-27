import React from 'react';
 import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollTracker from './components/scroll-tracker';

function App() {
  return (
    <Routes>
      <Route path="/" element={<ScrollTracker />} />
    </Routes>
  );
}

export default App;