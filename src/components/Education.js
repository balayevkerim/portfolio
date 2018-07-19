import React from 'react'
import {Grid, Cell} from 'react-mdl'
const education = (props) =>(

    <div className="education"> 
        <Grid>
            <Cell col={6}> 
                <p>{props.startDate} - {props.endDate} </p>
                
            </Cell>   
            <Cell col={6}> 
                <h4 style={{color:'purple',marginTop:'0'}}> {props.university}</h4>
                <p> {props.desc} </p>
            </Cell>    
 
         </Grid>
    </div>
)

export default education