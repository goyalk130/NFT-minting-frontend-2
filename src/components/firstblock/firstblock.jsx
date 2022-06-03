import React, { useEffect, useState } from "react";
import FirstBlockData from "./firstblockdata";



export default function FirstBlock(props) {

  const [firstBlockIndex, setFirstBlockIndex] = useState(0);
  const [firstboxdata, setFirstBoxData] = useState({
    id: 0,
    content: "first NFT data",
    imgUrl: "https://picsum.photos/200",
  });

  function incrementIndex(){
    setFirstBlockIndex((preValue) => {
      if (preValue === 3) {
        return 0;
      }
      return preValue + 1;
    });
    console.log(firstBlockIndex)

  };

  function decrementIndex(){
    setFirstBlockIndex((preValue) => {
      if (preValue === 0) {
        return 3;
      }
      return preValue - 1;
    });
    console.log(firstBlockIndex)

  };

  useEffect(() => {
    setFirstBoxData((preValue) => {
        switch (firstBlockIndex) {
          case 0:
            return {
              id: 0,
              content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only ",
              imgUrl: "https://news.artnet.com/app/news-upload/2022/01/TK-Bored-Ape.jpg",
            };
          case 1:
            return {
              id: 1,
              content: "not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
              imgUrl: "https://www.pinkvilla.com/files/styles/amp_metadata_content_image_min_696px_wide/public/decoding_nfts_what_are_nfts_and_how_do_they_work_all_you_need_to_know.jpg?itok=caHIT1ah",
            };
          case 2:
            return {
              id: 2,
              content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived ",
              imgUrl: "https://pbs.twimg.com/media/E3ERdO6XMAE1tFR.png",
            };
          case 3:
            return {
              id: 3,
              content: "five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
              imgUrl: "https://c.tenor.com/T1ehudBJ0EYAAAAd/nfts-nft.gif",
            };
        }
      });
      
  },[firstBlockIndex]);

  return (
    <div  className="flex first-block">
      <div onClick={() => {
      decrementIndex();
    }} className="left circle-button"><div
        
      >
        <p>{"<"}</p>
      </div></div>
      <FirstBlockData
        id={firstboxdata.id}
        content={firstboxdata.content}
        imgUrl={firstboxdata.imgUrl}
      />
      <div onClick={() => {
          incrementIndex();
        }} className="right circle-button"><div
        
      >
        {">"}
      </div></div>
    </div>
  );
}
