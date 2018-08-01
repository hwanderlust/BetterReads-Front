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
      debugger
      this.setState({
        selectedShelf: this.props.shelves[0][0].id
      })
    }
  }

  handleClick = () => {
    this.setState({addBook: !this.state.addBook})
  }

  addBookToShelf = () => {
    // console.log(this.props.book)
    this.props.createBook(this.props.book, this.state.selectedShelf)
  }

  handleChange = (e) => {
    this.setState({
      selectedShelf: e.target.value
    })
  }

  renderShelves = () => {
    return (
      <div>
        <select onChange={(e) => this.handleChange(e)}>
          {this.props.shelves.map(shelf => <option value={shelf.id}>{shelf.name}</option>)}
        </select>
        <button onClick={this.addBookToShelf}>Add to Shelf</button>
      </div>
    )
  }

  render() {
    console.log(this.props);
    return (
      this.props.book ?
      <div>
        <h1>{this.props.book.title}</h1>
        { this.state.addBook ? this.renderShelves() : <button onClick={this.handleClick}>Add Book to a Shelf</button> }
        <br/>
        <img src={this.props.book.image} />
        <h3>{this.props.book.author}</h3>
        <p>{this.props.book.description}</p>
      </div>
      : null
    )
  }
}

export default BookDetails
