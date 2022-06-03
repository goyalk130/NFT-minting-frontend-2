import React from 'react'


export default function ThirdBlockData(props){


    return (<div className='flex third-block-data'>
        <div className='flex third-block-data-content'>
        
        <p className='time-left-mint'>10 Days Left<br/>in</p>
        <p onClick={props.clickfunction} className='mint-button'>{props.content}</p>
        </div>
        
        <div  className='flex third-block-data-image'><img src={props.imgUrl}/></div>
    </div>)
}