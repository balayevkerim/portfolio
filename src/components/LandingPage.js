import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'

class LandingPage extends Component {
    render() {
        return (
            <div style={{width:'100%', margin:'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src="https://www.domstamand.com/wp-content/uploads/2016/12/avatar1.jpg"
                            alt="logo" className="avatar" />

                            <div className="banner-text">
                                <h1> Front-End developer</h1>

                                <hr />

                                <p> HTML&CSS&BOOTSTRAP / Javascript, ReactJS </p>

                                <div className="social-links"> 
                                    <a href="www.google.com" target="_blank"> <i class="fab fa-linkedin"></i></a>
                                    <a href="www.google.com" target="_blank"><i class="fab fa-github"></i></a>
                                    <a href="www.google.com" target="_blank"> <i class="fab fa-google"></i></a>
                                </div>
                            </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage