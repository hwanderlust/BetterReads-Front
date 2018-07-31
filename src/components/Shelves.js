import React from 'react'
import Shelf from './Shelf'
import { Redirect } from 'react-router-dom'


const Shelves = ({ createShelf, currentUser }) => {

  const addShelf = (e) => {
    e.preventDefault()
    const name = e.target.querySelector('input').value
    const userId = currentUser.id
    createShelf({name: name, user_id: userId})
  }

  const form = () => {
    <div>
      <form onSubmit={(e) => addShelf(e)}>
        <input placeholder='Shelf name'/>
        <button>Add Shelf</button>
      </form>
    </div>
  }

  const loggedIn = () => {
    if(currentUser){
      return currentUser.username
    } else {
      alert(`You're not logged in!`)
      return <Redirect to='/home' />
    }
  }

  return (
    <div className='shelves-container'>
      <div className='shelves-header'>
        <h1>{loggedIn()}</h1>
        <button>Add Shelf</button>
      </div>
      <div className='shelves-section'>
        <div className='shelf-info'>
          <div className='shelf-cover'></div>
          <div className='shelf-name'>
            <h1 className='vertical-name'>Shelf Name</h1>
          </div>
        </div>
        <div className='shelf-info'>
          <div className='shelf-cover'></div>
          <div className='shelf-name'>
            <h1 className='vertical-name'>Shelf Name</h1>
          </div>
        </div>
        <div className='shelf-info'>
          <div className='shelf-cover'></div>
          <div className='shelf-name'>
            <h1 className='vertical-name'>Shelf Name</h1>
          </div>
        </div>
        <div className='shelf-info'>
          <div className='shelf-cover'></div>
          <div className='shelf-name'>
            <h1 className='vertical-name'>Shelf Name</h1>
          </div>
        </div>
        <div className='shelf-info'>
          <div className='shelf-cover'></div>
          <div className='shelf-name'>
            <h1 className='vertical-name'>Shelf Name</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shelves;
