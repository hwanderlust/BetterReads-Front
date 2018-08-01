import React from 'react'

const ShelfDisplay = ({ shelf }) => {
  return (
    <div className='shelf-info'>
      <div className='shelf-cover'></div>
      <div className='shelf-name'>
        <h1 className='vertical-name'>Shelf Name</h1>
      </div>
    </div>
  )
}

export default ShelfDisplay
