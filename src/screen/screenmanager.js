import * as React from "react";
import { Screen } from "./screen";

const ScreenContext = React.createContext({
  activeScreen: null,
});

function ScreenManager({ children }) {
  const [activeScreen, setActiveScreen] = React.useState(0);

  const isActive = (screen) => activeScreen === screen;
  const content = React.Children.map(children, (element, index) => {
    if (element.type === Screen) {
      const elementClone = React.cloneElement(element, {
        active: isActive(index),
        key: index,
      });
      return elementClone;
    }
    return element;
  });

  const navigate = React.useCallback((screen) => {
    setActiveScreen(screen);
  }, []);

  return (
    <ScreenContext.Provider value={{ navigate, activeScreen }}>
      {content}
    </ScreenContext.Provider>
  );
}

function useScreenManager() {
  const value = React.useContext(ScreenContext);
  return value;
}

export { ScreenManager, useScreenManager };
