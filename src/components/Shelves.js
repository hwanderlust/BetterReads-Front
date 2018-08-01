import React from 'react'
import { Redirect } from 'react-router-dom'
import ShelfDisplay from './ShelfDisplay'

class Shelves extends React.Component {
  constructor() {
    super()
    this.state = {
      addShelf: false,
    }
  }

  componentDidMount() {
    // get shelves from this.props.shelves
    const shelves = this.props.shelves.map(shelf => shelf.id)
    // grab all shelves ids and use to do fetch for shelf's books

    // render books for shelves
  }

  showForm = () => {
    console.log('test');
    this.setState({addShelf: !this.state.addShelf})
  }

  addShelf = (e) => {
    e.preventDefault()
    const name = e.target.querySelector('input').value
    const userId = this.props.currentUser.id
    this.props.handleNewShelf({name: name, user_id: userId})
    this.showForm()
  }

  renderForm = () => {
    return (
      <div className='shelf-form-container'>
        <form className='shelf-form' onSubmit={(e) => this.addShelf(e)}>
          <input className='form-input' placeholder='Shelf name'/>
          <button>Add Shelf</button>
        </form>
      </div>
    )
  }

  loggedIn = () => {
    if(this.props.currentUser){
      const name = this.props.currentUser.username.charAt(0).toUpperCase() + this.props.currentUser.username.slice(1)
      return `${name}'s Shelves`
    } else {
      alert(`You're not logged in!`)
      return <Redirect to='/home' />
    }
  }

  render() {
    console.log(this.props.shelves);
    return (
      <div className='shelves-container'>
        <div className='shelves-header'>
          <h1>{this.loggedIn()}</h1>
          { this.state.addShelf ? this.renderForm() : <button onClick={this.showForm}>Add Shelf</button> }
        </div>
        <div className='shelves-section'>
          { this.props.shelves ? this.props.shelves.map(shelf => <ShelfDisplay shelf={shelf} />) : `Awwwww no shelves :(`}
        </div>
      </div>
    )
  }
}

export default Shelves;
