import React from "react";
import './CSS/Caption.css'

const Caption = ({ ...rest }) => {
  const { id, destinationId, caption, setCaption, highlight } = rest

  return (
    <div className={`Caption-container ${ highlight === id ? 'highlight' : ''}`} id={id}
      data-destinationId={destinationId} onClick={setCaption} dangerouslySetInnerHTML={{ __html: caption }}>

      </div>
  )
}

export default Caption

Caption.defaultProps = {
  highlight: 0
}