import * as React from "react";
import { createContext, useState } from "react";


export const GlobalContext = createContext(null);

const GlobalState = ({ children }) => {

  const [appInitiating, setAppInitiating] = useState(true);
  const [userInfo, setUserInfo] = useState(null);

  const context = {
    appInitiating: appInitiating,
    setAppInitiating: setAppInitiating,
    userInfo: userInfo,
    setUserInfo: setUserInfo
  };

  return (
    <GlobalContext.Provider value={context}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
