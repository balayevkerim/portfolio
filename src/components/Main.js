import React  from 'react'
import { Route, Switch } from 'react-router-dom'
import LandingPage from './LandingPage'
import Resume from './Resume'
import Projects from './Projects'
import Contact from './Contact'
import NoMatch from './NoMatch'

const Main = () =>(
    <Switch>
    <Route exact path ="/" component ={LandingPage} />
    <Route exact path ="/resume" component ={Resume} />
    <Route exact path ="/projects" component ={Projects} />
    <Route exact path ="/contact" component ={Contact} />
    <Route component={NoMatch} />
    </Switch>

)

export default Main