import React, {useState,useRef,useEffect} from 'react'

export default function Wheel(props){
    const border = useRef(0);
    const [top,setTop] = useState({});

    function handleScroll(e){
    const y = window.pageYOffset;
    const x = window.innerWidth ;
    if( x < 1150){
        border.current = y
    }else if (x>=1150 && y <= props.y){
        border.current = "0px 0px 20px #0e37f1"
    }else{
        border.current = "1px solid Black"
    }
    console.log(x +" "+ y);
    setTop({});
  }
  useEffect(() => {
    
    window.addEventListener("scroll",handleScroll);
    window.removeEventListener("scroll",() => {})
    
    
  },[border.current])

  const style = {
      boxShadow : border.current
  }
    

    

    return(
        <div style={style} className='moving-box'></div>
    );
}