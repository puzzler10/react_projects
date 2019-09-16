import React, {Component} from 'react'; 
'use strict'; 

const Entry = (props) => 
    <div> 
        <p className='datetime'>{props.datetime} </p>
        <p className='textbody'>{props.text}</p>
    </div>

export default Entry; 