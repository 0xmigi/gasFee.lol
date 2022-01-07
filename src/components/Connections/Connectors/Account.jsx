// import React from "react";
// import Address from "./Address";
// import Balance from "./Balance";

// export default function Account({
//   address,
//   userSigner,
//   localProvider,
//   mainnetProvider,
//   price,
//   minimized,
//   web3Modal,
//   loadWeb3Modal,
//   logoutOfWeb3Modal,
//   blockExplorer,
// }) {
 
//   return (
//     <div>
//       {minimized ? (
//         ""
//       ) : (
//         <span>
//           {address ? (
//             <Address address={address} ensProvider={mainnetProvider} blockExplorer={blockExplorer} />
//           ) : (
//             "Connecting..."
//           )}
//           <Balance address={address} provider={localProvider} price={price} />
//         </span>
//       )}
//       {web3Modal &&
//         (web3Modal?.cachedProvider ? (
//           <button
//             key="logoutbutton"
//             style={{ verticalAlign: "top", marginLeft: 8, marginTop: 4 }}
//             shape="round"
//             size="large"
//             onClick={logoutOfWeb3Modal}
//           >
//             logout
//           </button>
//         ) : (
//           <button
//             key="loginbutton"
//             style={{ verticalAlign: "top", marginLeft: 8, marginTop: 4 }}
//             shape="round"
//             size="large"
//             /* type={minimized ? "default" : "primary"}     too many people just defaulting to MM and having a bad time */
//             onClick={loadWeb3Modal}
//           >
//             connect
//           </button>
//         ))}
//     </div>
//   );
// }