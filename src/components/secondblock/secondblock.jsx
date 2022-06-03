import React from 'react'
import NftCard from './nftcard';

export default function SecondBlock() {

    const imageUrl = "https://picsum.photos/200";
    return (<div className='second-block'>
        
            <div className='second-block-back-box'></div>
            <div className='second-block-back-box'></div>
            <div className='scroll-block'>
                <div className='nfts-wrapper'>
                <NftCard imageSource={imageUrl}/>
                <NftCard imageSource={imageUrl}/>
                <NftCard imageSource={imageUrl}/>
                <NftCard imageSource={imageUrl}/>
                <NftCard imageSource={imageUrl}/>
                <NftCard imageSource={imageUrl}/>
                <NftCard imageSource={imageUrl}/>
                <NftCard imageSource={imageUrl}/>
                
                </div>
            </div>
    </div>)
}