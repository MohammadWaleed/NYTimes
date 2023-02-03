import * as React from "react";
import { createContext, ReactNode, useState } from "react";


export const GlobalContext = createContext(null);

const GlobalState = ({ children }) => {

  const defaultState = {
    appInitiating: true,
  };

  const [state, setState] = useState(defaultState);

  const context = {
    state: state,
    setState: setState
  };

  return (
    <GlobalContext.Provider value={context}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
