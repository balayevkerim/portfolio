import React, { Component } from 'react';
import { Layout, Navigation, Header, Drawer, Content } from 'react-mdl'
import { Link,Route } from 'react-router-dom'
import Main from './components/Main'

import './App.css'


class App extends Component {
  render() {
    return (
      <div className="App">

        {/* Uses a header that scrolls with the text, rather than staying locked at the top */}
        <div className="demo-big-content">
       
          <Layout>
            
            <Header title={<Link style={{textDecoration:'none', color:'white'}} to ="/"> My Portfolio</Link>} className="header-color" scroll>
              <Navigation className="nav-items">
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
              </Navigation>
            </Header>
            <Drawer title={<Link style={{textDecoration:'none', color:'black'}} to ="/"> My Portfolio</Link>}>
              <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
              </Navigation>
            </Drawer>
            <Content>
              <div className="page-content" />

              <Main />
            </Content>
          </Layout>
        </div>
      </div>
    );
  }
}

export default App;
