import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'

import Education from './Education'
import Experience from './Experience'
import Skill from './Skills'

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{ textAlign: 'center' }}>
                            <img src="http://getdrawings.com/img/male-silhouette-png-4.png" alt="sf"
                                style={{ height: '250px' }} />
                        </div>
                        <h2> Balayev Kerim</h2>
                        <h4 style={{ color: '#777' }}> Front-end developer</h4>
                        <hr style={{ borderTop: '3px solid purple', width: '50%' }} />
                        <p> orem Ipsum is simply dummy text
                            of orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a typthe printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a typ</p>

                        <hr style={{ borderTop: '3px solid purple', width: '50%' }} />
                        <h4 style={{ color: '#777' }}> Telephone number</h4>

                        <p>+36-20-506-96-54 </p>
                        <hr style={{ borderTop: '3px solid purple', width: '50%' }} />
                        <h4 style={{ color: '#777' }}> Email</h4>

                        <p>balayevkerim@gmail.com</p>
                        <hr style={{ borderTop: '3px solid purple', width: '50%' }} />
                        <h4 style={{ color: '#777' }}>Web</h4>

                        <p>myweb.com </p>

                    </Cell>
                    <Cell col={8}>


                        <div className="right-container">
                            <h3 style={{ color: 'white' }}> Education</h3>
                            <Education startDate="2011"
                                endDate="2015"
                                university="Azerbaijan State Oil Academy"
                                desc="Computer engineering BSc" />

                            <Education startDate="2016"
                                endDate="2019"
                                university="University of Debrecen"
                                desc="Computer science MSc" />


                            <hr style={{ borderTop: '3px solid purple' }} />

                            <h3 style={{ color: 'white' }}> Experience</h3>

                            <Experience startDate="2017.07"
                                endDate="2017.09"
                                university="Azerishiq ASc"
                                desc="Intern C# developer" />

                            <Experience startDate="2018.01"
                                endDate="current"
                                university="Devraptor school"
                                desc="Junior React developer" />

                            <hr style={{ borderTop: '3px solid purple' }} />

                            <h3 style={{ color: 'white' }}> Skills</h3>

                            <Skill skill ='Javascript' progress={52} />
                            <Skill skill ='HTML&CSS' progress={75} />

                            <Skill skill ='ReactJS' progress={54} />

                            <Skill skill ='SQL' progress={82} />


                        </div>
                    </Cell>

                </Grid>
            </div>
        )
    }
}

export default Resume