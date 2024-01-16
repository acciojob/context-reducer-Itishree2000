import React from "react";
import { useAppContext } from "../contexts/ContextProvider";

const Header = () => {
    const { currentUser, signOut } = useAppContext();

    return (
        <div>
            {/* Login & signout button */}
            <button
  id="login-btn"
  onClick={() => {
    console.log("Login button clicked");
    currentUser.isAuthenticated ? signOut() : null;
  }}
>
  {currentUser.isAuthenticated ? 'Sign Out' : 'Log In'}
</button>


<div id="current-user">
  {currentUser.isAuthenticated
    ? `Hello, ${currentUser.name}`
    : 'Current user: None, isAuthenticated: No'}
</div>
</div>
    );
};

export default Header;
