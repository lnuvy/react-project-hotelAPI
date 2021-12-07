
// 주어진 배열의 길이가 0인지 검사
const isArrayNull = (array) => {
  return array.length === 0
}

// 전달된 객체가 undefined 일때 빈객체 반환
const handleNullObj = (obj) => {
  return obj || {}
}

export { isArrayNull, handleNullObj }