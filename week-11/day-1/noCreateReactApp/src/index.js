import React from 'react';
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Game from './Game';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="game" element={<Game />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

// OR without JSX:
//   let element = React.createElement('p', {}, 'Hello React!')

const root = createRoot(document.querySelector("#react-container"))
root.render(<App />);