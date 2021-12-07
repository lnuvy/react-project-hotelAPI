import React from "react";
import { Input } from "../components";
import './CSS/Search.css'

const Search = () => {
  return (
    <div className="Search-container">
      <div className="Search-inputs">
        <Input name="destination" type="text" placeholder="목적지를 입력하시오" width="middle" />
        <Input name="check-in" type="date" placeholder="체크인" width="small" />
        <Input name="check-out" type="date" placeholder="체크아웃" width="small" />
        <Input name="adults-number" type="number" placeholder="인원수" width="small" min={1} max={7} />
      </div>
    </div>
  )
}

export default Search