import React, { useEffect } from 'react';
import ThirdBlockData from './thirdblockdata';
import {ABI} from "./../abi/abi"
import Aos from 'aos';
import "aos/dist/aos.css"

export default function ThirdBlock(){

    function printAbi(){
        console.log(ABI);
    }
    
    useEffect(() => {
        Aos.init({duration : 2000})
    },[]);

    return (
        
                <div data-aos="fade-up" className='third-block'>
            <ThirdBlockData clickfunction={printAbi} content="Mint" imgUrl="https://c.tenor.com/T1ehudBJ0EYAAAAd/nfts-nft.gif"/>
        </div>
        
    );
}