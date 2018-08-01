import React, { Component } from 'react';

import './App.css';

import Menu from './components/Menu'
import Shelves from './components/Shelves'
import Shelf from './components/Shelf'
import Books from './components/Books'
import Search from './components/Search'
import { getBestSellers, searchRequest, createUser, createShelf, loginUser, getCurrentUser, getUserShelves } from './adapter'

import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import SignUp from './components/auth/SignUp'
import Login from './components/auth/Login'

import Carousel from './components/Carousel'
import BookDetails from './components/BookDetails'

class App extends Component {

  state = {
    books: null,
    currentBook: null,
    currentUser: null,
    shelves: null,
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
          })
        } else {
          this.handleLogout()
        }
      })
      .then(data => this.getShelves())
    }
  }

  handleSignUp = (username, password, name) => {
    createUser({username, password, name}).then(data => {
      getCurrentUser(data.token).then(user => {
        this.setState({
          currentUser: user
        }, () => {
          localStorage.setItem("token", data.token)
          this.props.history.push('/shelves')
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
    }, () => this.props.history.push('/book'))
  }

  getShelves = () => {
    getUserShelves(this.state.currentUser.id, localStorage.getItem('token'))
    .then(shelves => {
      this.setState({shelves})
    })
  }

  handleNewShelf = (shelfObj) => {
    createShelf(shelfObj).then(data => this.getShelves())
  }

  render() {
    return (
      <div className="App container">
        <nav>
          <Menu currentUser={this.state.currentUser} />
        </nav>

        <Switch>
          <Route exact path='/' render={props => {
            return <Redirect to='/home' />
          }} />
          <Route path='/signup' render={props => {
            return <SignUp handleSignUp={this.handleSignUp}/>
          }} />
          <Route path='/login' render={props => {
            return <Login handleLogin={this.handleLogin}/>
          }} />
          <Route path='/shelves' render={props => {
            return <Shelves handleNewShelf={this.handleNewShelf} shelves={this.state.shelves} currentUser={this.state.currentUser}/>
          }} />
          <Route path='/shelf' component={Shelf} />
          <Route path='/carousel' component={Carousel} />
          <Route path='/logout' render={props => {
            this.handleLogout()
            return <Redirect to='/home' />
          }} />
          <Route path='/book' render={props => {
            return <BookDetails book={this.state.currentBook} />
          }} />
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
