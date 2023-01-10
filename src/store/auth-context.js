import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  userName: "",
  onLogout: () => {},
  onLogin: () => {},
});

export const AuthContextProvider = (props) => {
  const [userName, setUserName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userLoggedIn = localStorage.getItem("isLoggedIn");

    if (userLoggedIn === "1") {
      setIsLoggedIn(true);
      setUserName(localStorage.getItem("userName"));
    }
  }, []);

  const onLogoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userName");
  };

  const onLoginHandler = (user) => {
    setIsLoggedIn(true);
    setUserName(user.userName);
    localStorage.setItem("isLoggedIn", 1);
    localStorage.setItem("userName", user.userName);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        userName: userName,
        onLogout: onLogoutHandler,
        onLogin: onLoginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
