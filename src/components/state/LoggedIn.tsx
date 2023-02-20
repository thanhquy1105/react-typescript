import { useState } from "react";

export const LoggedIn = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogIn = () => {
        setIsLoggedIn(true);
    };
    const handleLogOut = () => {
        setIsLoggedIn(false);
    };

    return (
        <div>
            <button onClick={handleLogIn}>Log in</button>
            <button onClick={handleLogOut}>Log out</button>
            <div>User is {isLoggedIn ? "logged in" : "logged out"}</div>
        </div>
    );
};
