import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Search, Hotels, HotelInfo, NotFound } from 'pages'

const App = () => {
    return (
      <div>
        <Routes>
          <Route path='/' element={<Search />} />
          <Route path='/hotels' element={<Hotels />} />
          <Route path='/hotelInfo' element={<HotelInfo />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </div>
    );
  };
  
  ReactDOM.render(<BrowserRouter>
                    <App />
                  </BrowserRouter>, document.getElementById("app"));