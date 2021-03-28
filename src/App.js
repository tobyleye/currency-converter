import "./App.css";
import { Screen } from "./screen/screen";
import { ScreenManager, useScreenManager } from "./screen/screenmanager";

function Controls() {
  const { navigate, activeScreen } = useScreenManager();
  console.log({ navigate, activeScreen });
  return (
    <div className="controls">
      {Array(4)
        .fill(null)
        .map((i, index) => (
          <button
            key={index}
            disabled={activeScreen === index}
            onClick={() => navigate(index)}
          >
            screen #{index + 1}
          </button>
        ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Controls />
      <ScreenManager>
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
      </ScreenManager>
    </div>
  );
}

export default App;
