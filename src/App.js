import React from 'react'
import Home from './Components/Home'
import About from './Components/About'
import Works from './Components/Works'
import Contact from './Components/Contact'
import SideBar from './Components/SideNavigationBar'
import GlobalStyle from './Themes/globalStyles'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <SideBar />

      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/work">
          <Works />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
