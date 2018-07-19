import React, { Component } from 'react'
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl'
class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>

                        <h1> Balayev Kerim</h1>

                        <img src=" http://getdrawings.com/img/male-silhouette-png-4.png" style={{ height: '250px' }} />

                        <p>loresgsga ga gasgas gas ga g ggg ag a ga gasagagsagagasg agg ag a ga gasagagsagagasg agg ag a ga gasagagsagagasg agg ag a ga gasagagsagagasg agg ag a ga gasagagsagagasg asg as ga ga a gasggsgsgagsga  </p>


                    </Cell>


                    <Cell col={6}>

                        <h1> Contact me </h1>
                        <hr style={{ borderTop: '5px dotted #000', width: '50%', margin: 'auto' }} />

                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent > <i class="fas fa-phone-square"></i> +36 20 506 96 54</ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent icon="person">Aaron Paul</ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent icon="person">Bob Odenkirk</ListItemContent>
                                </ListItem>
                            </List>

                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact