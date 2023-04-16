import './App.css';
import React, { useState } from 'react'
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home/Home';
import News from './Components/News';


const App = () => {

  const pageSize = 15;

  const apiKey = process.env.REACT_APP_NEWS_API

  const [progress, setProgress] = useState(0)

  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}

        />
        <Routes>
          <Route exact path="/" element={<Home setProgress={setProgress} apiKey={apiKey} key="General" pageSize={pageSize} country="in" category="General" />} />
          <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key="General" pageSize={pageSize} country="in" category="General" />} />
          <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="Business" pageSize={pageSize} country="in" category="Business" />} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="Entertainment" pageSize={pageSize} country="in" category="Entertainment" />} />
          <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="Health" pageSize={pageSize} country="in" category="Health" />} />
          <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="Science" pageSize={pageSize} country="in" category="Science" />} />
          <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="Sports" pageSize={pageSize} country="in" category="Sports" />} />
          <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="Technology" pageSize={pageSize} country="in" category="Technology" />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;