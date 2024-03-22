import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TopNavigation from "./navbar/TopNavigation"; // Adjust the path as necessary
import Home from "./components/Home/Home"; // Your Home component
import Skills from "./components/Skills/Skills"; // Your Skills component
import Contact from "./components/Contact/Contact"; // Your Contact component

import "./App.css";

function App() {
    return (
        <Router>
            <TopNavigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/contact" element={<Contact />} />
                {/* Add other routes as needed */}
            </Routes>
        </Router>
    );
}

export default App;
