import React, { useState } from "react";
import { Input } from "../components";
import './CSS/Search.css'

const Search = () => {

  const [destination, setDestination] = useState('')
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [adultsNumber, setAdultsNumber] = useState(1)

  const handleChange = (e) => {
    const { name, value } = e.target
    console.log(name, value);

    switch(name) {
      case 'destination' :
        setDestination(value)
        break;
      case 'check-in' :
        setCheckIn(value)
        break;
      case 'check-out' :
        setCheckOut(value)
        break;
      case 'adults-number' :
        setAdultsNumber(value)
        break;
      
    }
  }

  return (
    <div className="Search-container">
      <div className="Search-inputs">
        <Input name="destination" type="text" placeholder="목적지를 입력하시오" width="middle"
          value={destination} onChange={handleChange} />
        <Input name="check-in" type="date" placeholder="체크인" width="small"
          value={checkIn} onChange={handleChange} />
        <Input name="check-out" type="date" placeholder="체크아웃" width="small"
          value={checkOut} onChange={handleChange} />
        <Input name="adults-number" type="number" placeholder="인원수" width="small"
          value={adultsNumber} onChange={handleChange} min={1} max={7} />
      </div>
    </div>
  )
}

export default Search