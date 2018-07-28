import React, { Component } from 'react';

import './App.css';

import MenuContainer from './components/menu/MenuContainer'
import Shelves from './components/Shelves'
import Shelf from './components/Shelf'
import Books from './components/Books'
import Search from './components/Search'
import { getBestSellers } from './adapter'

import { Switch, Route, Redirect } from 'react-router-dom'
import SignUp from './components/auth/SignUp'
import Login from './components/auth/Login'

class App extends Component {

  state = {
    menuStatus: false,
  }

  handleMenu = () => {
    console.log('hit fn');
    this.setState({menuStatus: !this.state.menuStatus}, () => console.log(this.state))
  }

  render() {
    getBestSellers()
    return (
      <div className="App container">
        <nav>
          <MenuContainer handleMenu={this.handleMenu} menuStatus={this.state.menuStatus} />
        </nav>

        <Switch>
          <Route exact path='/' render={props => {
            return <Redirect to='/home' />
          }} />
          <Route path='/signup' component={SignUp} />
          <Route path='/login' component={Login} />
          <Route path='/shelves' component={Shelves} />
          <Route path='/shelf' component={Shelf} />
          <Route path='/home' render={props => {
            return (
              <div className='home'>
                <header className="App-header">
                  <h1 className="App-title">BetterReads</h1>
                </header>
                <main>
                  <Search />
                  <br/><br/>
                  <Books />
                  <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                  </p>
                </main>
              </div>
            )
          }} />

        </Switch>
      </div>
    );
  }
}

export default App;
