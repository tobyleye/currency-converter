import * as React from "react";
import "./App.css";
import NumberPad from "./number-pad";
// import { Screen } from "./screen/screen";
// import { ScreenManager, useScreenManager } from "./screen/screenmanager";

function App() {
  const [amount, setAmount] = React.useState("");

  return (
    <div className="App">
      {/* <ScreenManager>
        <Screen position="right">
          <p>Right screen</p>
        </Screen>
        <Screen bgColor="white" position="left">
          <p>Left screen</p>
        </Screen>
        <Screen bgColor="red" position="bottom">
          <p>Bottom screen</p>
        </Screen>
        <Screen bgColor="lightblue" position="top">
          <p>Bottom screen</p>
        </Screen>
        <Controls />
      </ScreenManager> */}
      <NumberPad onChange={setAmount} value={amount} />
    </div>
  );
}

export default App;
