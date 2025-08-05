import React from "react";
import Landing from "./Pages/Landing";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App font-sans">
        <Routes>
            <Route path="/" element={<Landing />}/>
            
        </Routes>
    </div>
  );
}

export default App;


