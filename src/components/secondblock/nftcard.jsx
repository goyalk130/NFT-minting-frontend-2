import React from 'react'
import NFTS from './nfts'

export default function NftCard(props){
    return(<div className='nft-card'>
        <NFTS imageSource={props.imageSource}/>
        <div className='nft-text-content'>
        <h3 className='nft-name'>NFT Name</h3>
        <h6 className='nft-description'>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac</h6>
        </div>
    </div>)
}