// import React from "react";
// import { useAppContext } from "../contexts/ContextProvider";

// const Header = () => {
//   const { currentUser, signOut } = useAppContext();

//   return (
//     <div>
//       {/* Login & signout button */}
//       <button
//         id="login-btn"
//         onClick={() => {
//           console.log("Login button clicked");
//           currentUser.isAuthenticated ? signOut() : null;
//         }}
//       >
//         {currentUser.isAuthenticated ? "Sign Out" : "Log In"}
//       </button>

//       <div id="current-user">
//         {currentUser.isAuthenticated
//           ? `Hello, ${currentUser.name}`
//           : "Current user: None, isAuthenticated: No"}
//       </div>
//     </div>
//   );
// };

// export default Header;
import React, { useState } from 'react';

function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState("");

  // const updateUserInfo = () => {
    
  // };

  const login = () => {
    setCurrentUser("rohan");
    setIsAuthenticated(true);
   
  };

  const signout = () => {
    setCurrentUser("");
    setIsAuthenticated(false);
   
  };

  return (
    <div>
      <div style={{ display: isAuthenticated ? 'block' : 'none' }}>
        <p>Current user: {currentUser}, isAuthenticated: Yes</p>
      </div>
      <div style={{ display: !isAuthenticated ? 'block' : 'none' }}>
        <p>Current user:, isAuthenticated: No</p>
      </div>

      <button onClick={login}>Login</button>
      <button onClick={signout}>Signout</button>
    </div>
  );
}

export default Header;
