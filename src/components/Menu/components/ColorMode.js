import { createContext, useState } from 'react';

export const ColorModeContext = createContext({
  mode: "",
  setMode: () => alert('Você precisa me configurar primeiro'),
  toggleMode: () => alert('Você precisa me configurar primeiro')
});

export const ColorModeProvider = ({ initialMode, children }) => {
  const [mode, setMode] = useState(initialMode);

  function toggleMode() {
    setMode((state) => (state === "dark" ? "light" : "dark"));
  }

  return (
    <ColorModeContext.Provider
      value={{
        mode: mode,
        setMode: setMode,
        toggleMode: toggleMode,
      }}
    >
      {children}
    </ColorModeContext.Provider>
  );
};
