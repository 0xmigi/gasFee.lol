// import DoughnutChart from '../Charts/Charts';
import React, { useState } from 'react'
import { PropTypes } from 'prop-types';




export default function Home(props) {
  const {time, active} = props;

  return (
    <div >
       <p>The time is {new Date(time).toLocaleTimeString()}</p>
       <p>The component is {active ? 'active' : 'NOT active'}</p>
       {props.children}
    </div>
    
  );
}



Home.defaultProps = {
  time: Date.now() 
}
Home.propTypes = {
  time: PropTypes.number,
  active: PropTypes.bool,
  children: PropTypes.arrayOf(PropTypes.element),
};


    
  
  //   return (
  //     <div className="loadpage" >
        
  //       <DoughnutChart />
  //          <h3 className="fee-page">
  //            most recent acount: {recentAddress}
  //             <p>You've spent <span id="gasFeeTotal">&#x1F914</span> on gas. Right now, that's <span id="tokenusd">&#x1F914</span>.</p>
  //             <p>You used <span id="gasUsedTotal">&#x1F914</span> gas to send <span id="nOut">&#x1F914</span> transactions, with an average price of <span id="gasPricePerTx">&#x1F914</span> gwei. &#x1F914 on gas. Right now, that's </p>
  //             <p><span id="nOutFail">&#x1F914</span> of them failed, costing you <span id="gasFeeTotalFail">&#x1F914</span>.</p>
  //          </h3>
  //     </div>
      
  //   );
  // }

