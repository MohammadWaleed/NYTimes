import * as React from "react";
import { useContext, useEffect } from "react";
import { GlobalContext } from "./store/global";


export const OnStart = ({ children }) => {

  const { setState } = useContext(GlobalContext);


  useEffect(() => {

    setTimeout(() => {

      //TODO: Get saved user info from storage and set it

      setState({
        appInitiating: false,
      });
    }, 2000);

  });

  return (
    <>
      {children}
    </>
  );

};
