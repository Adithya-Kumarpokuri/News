import "./App.css";
import React,{useState} from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import ErrorPage from './components/ErrorPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App=()=>{
  const pageSize=5;
  const apiKey=process.env.REACT_APP_API_KEY;
  const [progress, setProgress] =useState(0);
    return (
      <div>
        <BrowserRouter>
        <Navbar/>
        <LoadingBar color='#f11946' progress={progress}/>
          <Routes>
            <Route exact path="/science" element={<News key="science" setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="us" category="science" />}/>
            <Route exact path="/technology" element={<News key="technology" setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="us" category="technology" />}/>
            <Route exact path="/business" element={<News key="business" setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="us" category="business" />}/>
            <Route exact path="/" element={<News key="general" setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="us" category="general"/>}/>
            <Route exact path="/entertainment" element={<News key="entertainment" setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="us" category="entertainment" />}/>
            <Route exact path="/sports" element={<News key="sports" setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="us" category="sports" />}/>
            <Route exact path="/health" element={<News key="health" setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="us" category="health" />}/>
            <Route exact path="*" element={<ErrorPage/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    );
}

export default App;