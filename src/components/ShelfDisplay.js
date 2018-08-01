import React from 'react'

const ShelfDisplay = ({ shelf, renderShelf }) => {

  return (
    <div className='shelf-info' onClick={ () => renderShelf(shelf) } >
      { shelf[1][0] ? <img src={shelf[1][0].image} className='shelf-cover' /> : null}
      <div className='shelf-name'>
        {shelf[1][0] ? <h1 style={{left: '-15px'}} className='vertical-name'>{shelf[0].name}</h1> : <h1 style={{left: '-5px'}} className='vertical-name'>{shelf[0].name}</h1> }
      </div>
    </div>
  )
}

export default ShelfDisplay
