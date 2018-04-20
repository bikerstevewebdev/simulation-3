import React, { Component } from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import Nav from './components/Nav/Nav'

import PropTypes from 'prop-types'
import { withRouter } from 'react-router'

import Auth from './components/Auth/Auth'
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import Post from './components/Post/Post'
// import Routes from './routes'


class App extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }
  componentDidMount() {
    console.log('Just Mounted', this.props)
  }
  componentDidUpdate() {
    console.log('Just Updated', this.props)
  }
  render() {
    console.log(this.props)
    return (
      <div className="App">
        {/* <Routes /> */}
        {
            this.props.location.pathname === '/'
            ?
            null
            :
            <Nav />
          }
          {/* <Nav /> */}
        <Switch>
          <Route path='/' exact component={Auth}/>
          <Route path='/dashboard' component={Dashboard}/>
          <Route path='/post/:postid' component={Post}/>
          <Route path='/new' component={Form}/>
        </Switch>
      </div>
    )
  }
}
export default withRouter(App)

// export default App;
