import React from 'react'
import LinkList from './pages/LinkList'
import CreateLink from './pages/CreateLink'
import Header from './shared/comps/Header'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from './pages/Login'
import Search from './shared/comps/Search/Search'
import SignUp from './pages/SignUp'
import Home from './pages/Home'

const App = props => {
  {
    return (
        <div className="center w85">
          <Header/>
          <div className="ph3 pv1 background-gray">
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/new" render={() => <Redirect to="/new/1"/>}/>
              <Route exact path="/create" component={CreateLink}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/signUp" component={SignUp}/>
              <Route exact path="/search" component={Search}/>
              <Route exact path="/top" component={LinkList}/>
              <Route exact path="/new/:page" component={LinkList}/>
            </Switch>
          </div>
        </div>
    )
  }
}
export default App
