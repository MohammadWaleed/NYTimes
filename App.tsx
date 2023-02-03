/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { Main } from "./src/routes";
import GlobalState from "./src/store/global";
import { OnStart } from "./src/OnStart";


function App(): JSX.Element {


  return (
    <GlobalState>
      <OnStart>
        <Main />
      </OnStart>
    </GlobalState>
  );
}

export default App;
