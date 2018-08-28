import React from 'react'

class BookDetails extends React.Component {
  state = {
    addBook: false,
    selectedShelf: null
  }

  componentDidMount(){
    if (this.props.shelves){
      this.initialShelf()
    }
  }

  initialShelf = () => {
    if(this.props.shelves[0]) {
      this.setState({
        selectedShelf: this.props.shelves[0][0].id
      })
    }
  }

  handleClick = () => {
    this.setState({addBook: !this.state.addBook})
  }

  addBookToShelf = () => {
    this.props.handleNewBook(this.props.book, this.state.selectedShelf)
  }

  handleChange = (e) => {
    this.setState({
      selectedShelf: e.target.value
    })
  }

  renderShelves = () => {
    return (
      <div>
        <select onChange={(e) => this.handleChange(e)} className='button-color'>
          {this.props.shelves.map(shelf => <option value={shelf[0].id}>{shelf[0].name}</option>)}
        </select>
        <button onClick={this.addBookToShelf} className='button-color'>Add to Shelf</button>
      </div>
    )
  }

  render() {
    return (
      this.props.book ?
      <div className='book-details-container'>
        <div className='wrapper wrapper-border wrapper-background'>
          <h1 className='white-font'>{this.props.book.title}</h1>
          { this.state.addBook ? this.renderShelves() : <button onClick={this.handleClick} className='form-inputs button-color'>Add Book to a Shelf</button> }
          <br/>
          <img className='' src={this.props.book.image} alt='specific book cover along with book info' />
          <h3 className='white-font'>{this.props.book.author}</h3>
          <p className='white-font'>{this.props.book.description}</p>
        </div>
      </div>
      : null
    )
  }
}

export default BookDetails
