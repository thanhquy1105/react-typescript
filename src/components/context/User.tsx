import { useContext, useState } from "react";
import { UserContext } from "./UserContext";

export const User = () => {
    const userContext = useContext(UserContext);
    const handleLogIn = () => {
        if (userContext) {
            userContext?.setUser({
                name: "quy",
                email: "thanhquy@gmail.com",
            });
        }
    };
    const handleLogOut = () => {
        if (userContext) {
            userContext?.setUser(null);
        }
    };

    return (
        <div>
            <button onClick={handleLogIn}>Log in</button>
            <button onClick={handleLogOut}>Log out</button>
            <div>User name is {userContext.user?.name}</div>
            <div>User email is {userContext.user?.email}</div>
        </div>
    );
};
