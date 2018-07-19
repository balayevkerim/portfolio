import React from 'react'
import { ProgressBar, Grid, Cell } from 'react-mdl'

const skill = (props) => (
    

        <Grid>
            <Cell col={12}>
                <div style={{color:'white', display:'flex'}}> {props.skill}
                    <ProgressBar progress={props.progress} style={{margin:'auto',width:'75%'}}  buffer={87} />

                </div>

            </Cell>
        </Grid>
   

)

export default skill