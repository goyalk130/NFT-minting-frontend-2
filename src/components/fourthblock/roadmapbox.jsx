import React from 'react'
import Aos from 'aos';
import "aos/dist/aos.css"

export default function RoadmapBox(props){
    return (<div data-aos="fade-up" className='roadmap-box'>
        <div><p><h1>Heading</h1>{props.content}</p></div>
        
    </div>)
}