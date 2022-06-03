import React from 'react'


export default function FirstBlockData(props){
    return (<div className='flex first-block-data'>
        <div className='flex first-block-data-content'><p>{props.content}</p></div>
        <div  className='flex first-block-data-image'><img src={props.imgUrl}/></div>
    </div>)
}