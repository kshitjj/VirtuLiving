// Library Imports
import React, { Suspense } from "react";

// Component Imports
import Header from './components/Header.jsx';
import Body from "./components/Body.jsx";
import Footer from "./components/Footer.jsx";

// Style Imports
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css'

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
