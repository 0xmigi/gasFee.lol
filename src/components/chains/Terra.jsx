import React, { useState, useEffect, useRef } from 'react';
import { ReactComponent as LearnMoreIcon } from '../../assets/icons/learnMore.svg';

// let useClickOutside = (handler) => {
//   let domNode = useRef()

//   useEffect(() => {
//     let maybeHandler = (event) => {
//       if (domNode.current&&!domNode.current.contains(event.target)) {
//         handler();
//       }
//     };
//     document.addEventListener("mousedown", maybeHandler);

//     return () => {
//       document.removeEventListener("mousedown", maybeHandler)
//     }
//   });

//   return domNode
// };

export default function Terra(props) {

  
  const [openPopup, setOpenPopup] = useState(false);

  

  const gasEducationPopup = () => {
    console.log("window should be displayed");
    return(
      <div className="plus-ultra">
          <div className="plus-ultra-panel">
            <p className="plus-ultra-text">+Ultra NFTs coming soon, a generative svg NFT based on your unfortunate transaction history, served fresh on Optimism or Polygon</p>
            <div className="small-pepe">
            </div>
          </div>
      </div>
        // <div className="education-popup">
        //   <div className="education-content">
        //       this is how terra gas fees work...
        //   </div>
        // </div>
    )
  };

  const PopupButton = (props) => {
    return (
      <li className="nav-item-nft">
          <a href="#" className="popup" onClick={() => setOpenPopup(!openPopup)}>
            {props.icon}
          </a>
          {openPopup && gasEducationPopup()}
        </li>
      // <div className="education-popup">
      //   <div className="education-content">
      //       this is how terra gas fees work...
      //   </div>
      // </div>
      // <button
      //   className="popup"
      //   onClick={gasEducationPopup}
      //   >
      //     {<LearnMoreIcon />}
      // </button>
    )
  }

  // let domNode = useClickOutside(() => {
  //   setOpenPopup(false)
  // })


  return (
    <div className="fee-detail-popup">
      <div className="about-chain">
        Terra history
            {/* <PopupButton icon={<LearnMoreIcon />}/> */}
      </div> 
    </div>
  );
}