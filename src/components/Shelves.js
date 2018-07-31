import React from 'react'
import Shelf from './Shelf'

const Shelves = props => {
  console.log(props);

  const addShelf = (e) => {
    e.preventDefault()
    console.log(props.currentUser.id);
    const name = e.target.querySelector('input').value
    const userId = props.currentUser.id
    console.log('shelf name:', name);
    props.createShelf({name: name, user_id: userId}).then(data => console.log(data))
  }

  return (
    <div>
      <form onSubmit={(e) => addShelf(e)}>
        <input placeholder='Shelf name'/>
        <button>Add Shelf</button>
      </form>
      <div className='shelf-book-cover-top-left'></div>
      <div className='shelf-top-left book-cover-title'>
        <h1>Shelf Name</h1>
      </div>
      <div className='shelf-book-cover-top-right'></div>
      <div className='shelf-top-right book-cover-title'>
        <h1>Shelf Name</h1>
      </div>
      <div className='shelf-book-cover-bottom-left'></div>
      <div className='shelf-bottom-left book-cover-title'>
        <h1>Shelf Name</h1>
      </div>
      <div className='shelf-book-cover-bottom-right'></div>
      <div className='shelf-bottom-right book-cover-title'>
        <h1>Shelf Name</h1>
      </div>
    </div>
  )
}

export default Shelves;
