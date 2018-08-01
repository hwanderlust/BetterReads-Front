import React from 'react'

const ShelfDisplay = ({ shelf }) => {
  return (
    <div className='shelf-info'>
      { shelf[1][0] ? <img src={shelf[1][0].image} className='shelf-cover' /> : null}
      <div className='shelf-name'>
        <h1 className='vertical-name'>{shelf[0].name}</h1>
      </div>
    </div>
  )
}

export default ShelfDisplay
