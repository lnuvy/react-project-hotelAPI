import React, { useState } from "react";
import { Input, Button, Caption } from "../components";
import { fetchHotelsCom, isArrayNull } from 'lib'
import { useNavigate } from "react-router-dom";

import queryData from '../queryData' // hotels.com 에서 제공받은 가짜데이터

import './CSS/Search.css'


const Search = () => {

  const [destination, setDestination] = useState('')
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [adultsNumber, setAdultsNumber] = useState(1)

  const [captions, setCaptions] = useState([])
  const [open, setOpen] = useState('hide')
  const [index, setIndex] = useState(0)
  const [destinationId, setDestinationId] = useState(0)

  const navigate = useNavigate()


  const handleChange = (e) => {
    const { name, value } = e.target
    console.log(name, value);

    switch (name) {
      case 'destination':
        value ? setOpen('show') : setOpen('hide')
        executeAutoCaption(value)
        setDestination(value)
        break;
      case 'check-in':
        setCheckIn(value)
        break;
      case 'check-out':
        setCheckOut(value)
        break;
      case 'adults-number':
        setAdultsNumber(value)
        break;
    }
  }

  // 자동완성 기능 구현함수
  const executeAutoCaption = async (query) => {

    // 실제 데이터 불러오게 될때 주석 해제
    // const data = await getCaptions(query)
    // const { suggestions } = data
    const { suggestions } = queryData;
    // console.log(queryData);
    const captionsItems = []

    if (!isArrayNull(suggestions)) {
      suggestions.map(s => {
        const { entities } = s
        captionsItems.push(...entities)
      })
    }
    // console.log('captions: ', captionsItems);
    setCaptions(captionsItems)
    setHighlight();
  }

  const getCaptions = async (query) => {
    console.log('get captions...');

    // 실제 api 에서 불러오게 될때 주석 해제
    // const data = await fetchHotelsCom(`https://hotels-com-provider.p.rapidapi.com/v1/destinations/search?query=${query}&currency=KRW&locale=ko_KR`)
    // return data
  }

  const setCaption = (e) => {
    const target = e.target.closest('.Caption-container')
    console.log(target, '!!!!!!!!');
    console.log(target.dataset.destinationId);

    setDestination(target.innerText);
    setDestinationId(target.dataset.destinationId);
    setOpen('hide')
  }

  const setHighlight = () => {
    captions.map( (item, id) => {
      item.caption.includes(destination) ? setIndex(id) : null
    })
  }

  const changeCaptionHighlight = (e) => {
    console.log(e.keyCode);
    const captionsLength = captions.length

    if(e.keyCode === 40) { // 아래 방향카
      index < captionsLength - 1 ? setIndex(index + 1) : setIndex(0)
    } else if(e.keyCode === 38) { // 위 방향키
      index > 0 ? setIndex(index - 1) : setIndex(captionsLength - 1)
    } else if(e.keyCode === 13) {
      const target = document.getElementById(index)
      console.log("선택된 타겟", target);
      console.log(target.dataset.destinationId);

      setDestination(target.innerText)
      setDestinationId(target.dataset.destinationId)
      setOpen('hide')
    }
  }

  const searchHotels = () => {
    console.log('search hotels...');
    console.log(destinationId, checkIn, checkOut, adultsNumber);
    navigate('/hotels', { state: { destinationId, checkIn, checkOut, adultsNumber } })
  }

  const Captions = ({ captions }) => {
    let captionUI = null;
    console.log('captionUI: ', captions);
    if(!isArrayNull(captions)) {
      captionUI = captions.map( (item, id) => {
        return <Caption key={item.destinationId} id={id} destinationId={item.destinationId}
          caption={item.caption} setCaption={setCaption} highlight={index} />
      })
    }
    return <>{captionUI}</>
  }

  return (
    <div className="Search-container">
      <div className="Search-inputs">
        <Input name="destination" type="text" placeholder="목적지를 입력하시오" width="middle"
          value={destination} onChange={handleChange} onKeyUp={changeCaptionHighlight} />
          <div className={`captions ${open}`}>
            {<Captions captions={captions} />}
          </div>
        <Input name="check-in" type="date" placeholder="체크인" width="small"
          value={checkIn} onChange={handleChange} />
        <Input name="check-out" type="date" placeholder="체크아웃" width="small"
          value={checkOut} onChange={handleChange} />
        <Input name="adults-number" type="number" placeholder="인원수" width="small"
          value={adultsNumber} onChange={handleChange} min={1} max={7} />
        <Button handleClick={searchHotels} color="blue" size="long">검색</Button>
      </div>
    </div>
  )
}

export default Search