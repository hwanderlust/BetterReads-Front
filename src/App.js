import React, { Component } from 'react';

import './App.css';

import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { getBestSellers, searchRequest, createUser, createShelf, loginUser, getCurrentUser, getUserShelves, createBook, getAllUsers } from './adapter'

import Menu from './components/Menu'
import SignUp from './components/auth/SignUp'
import Login from './components/auth/Login'
import NotFound from './components/NotFound'

import Shelves from './components/Shelves'
import Shelf from './components/Shelf'

import Books from './components/Books'
import BookDetails from './components/BookDetails'

import Search from './components/Search'

class App extends Component {

  state = {
    books: null,
    currentBook: null,
    currentUser: null,
    shelves: null,
    activeComponent: 'home',
    currentShelf: null,
    usernames: null,
  }

  componentDidMount() {
    getBestSellers().then(books => {
      this.setState({
        books: books
      })
    })

    const loggedIn = localStorage.getItem("token")

    if (loggedIn) {
      getCurrentUser(loggedIn).then(user => {
        if (user){
          this.setState({
            currentUser: user
          }, () => this.getShelves())
        } else {
          this.handleLogout()
        }
      })
    }

    const usernames = this.getUsernames()
    this.setState({usernames})
  }

  handleMenuStyle = () => {
    if(this.state.activeComponent !== document.location.pathname) {
      this.setState({activeComponent: document.location.pathname})
    }
  }

  getUsernames = () => {
    const allUsers = []
    getAllUsers().then(users => users.map(user => allUsers.push(user.username)))
    console.log(allUsers)
    return allUsers
  }

  handleSignUp = (username, password, name) => {
    createUser({username, password, name}).then(data => {
      getCurrentUser(data.token).then(user => {
        this.setState({
          currentUser: user
        }, () => {
          localStorage.setItem("token", data.token)
          this.getShelves()
          this.props.history.push('/home')
        })
      })
    })
  }

  handleLogin = (username, password) => {
    loginUser({username, password}).then(data => {
      getCurrentUser(data.token).then(user => {
        this.setState({
          currentUser: user
        }, () => {
          localStorage.setItem("token", data.token)
          this.getShelves()
          this.props.history.push('/home')
        })
      })
    })
  }

  handleLogout = () => {
    localStorage.removeItem("token")
    this.setState({
      currentUser: null
    })
  }

  handleSearch = (input) => {
    searchRequest(input).then(data => {
      this.setState({
        books: data
      })
    });
  }

  renderBook = (book) => {
    this.setState({
      currentBook: book
    }, () => {
      console.log(this.state)
      this.props.history.push('/book')
    })
  }

  getShelves = () => {
    if(this.state.currentUser) {
      getUserShelves(this.state.currentUser.id, localStorage.getItem('token'))
      .then(shelves => {
        this.setState({shelves})
      })
      .then(data => console.log(this.state))
    }
  }

  handleNewShelf = (shelfObj) => {
    createShelf(shelfObj).then(data => this.getShelves())
  }

  handleNewBook = (newBook, shelf) => {
    createBook(newBook, shelf)
    .then(book => this.getShelves())
    .then(data => this.props.history.push('/shelves'))
  }

  renderShelf = (shelf) => {
    this.setState({currentShelf: shelf}, () => this.props.history.push('/shelf'))
  }

  render() {
    // eslint-disable-next-line
    { this.handleMenuStyle() }
    return (
      <div className="App container">
        <nav>
          <Menu currentUser={this.state.currentUser} currentComponent={this.state.activeComponent} />
        </nav>

        <Switch>
          <Route exact path='/' render={props => {
            return <Redirect to='/home' />
          }} />
          <Route path='/signup' render={props => {
            return <SignUp handleSignUp={this.handleSignUp} usernames={this.state.usernames} />
          }} />
          <Route path='/login' render={props => {
            return <Login handleLogin={this.handleLogin}/>
          }} />
          <Route path='/shelves' render={props => {
            return <Shelves handleNewShelf={this.handleNewShelf} shelves={this.state.shelves} currentUser={this.state.currentUser}
              renderShelf={this.renderShelf} />
          }} />
          <Route path='/shelf' render={props => {
            return <Shelf shelf={this.state.currentShelf} renderBook={this.renderBook}/>
          }} />
          <Route path='/logout' render={props => {
            this.handleLogout()
            return <Redirect to='/home' />
          }} />
          <Route path='/book' render={props => {
            return <BookDetails shelves={this.state.shelves} book={this.state.currentBook} handleNewBook={this.handleNewBook}/>
          }} />
          <Route path="/404" component={NotFound} />
          <Route path='/home' render={props => {
            return (
              <div className='home'>
                <header className="App-header">
                  <h1 className="App-title">BetterReads</h1>
                </header>
                <main>
                  <Search handleSearch={this.handleSearch} />
                  <br/><br/>
                  {this.state.books ? <Books books={this.state.books} renderBook={this.renderBook} /> : <img alt='flipbook gif' src='https://images.gr-assets.com/hostedimages/1496786980ra/22952794.gif' />}
                </main>
              </div>
            )
          }} />

        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
