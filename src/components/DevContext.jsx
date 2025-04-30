import { createContext, useContext, useState, useCallback } from 'react';

const DevContext = createContext();

export function DevProvider({ children }) {
  const [debugInfo, setDebugInfo] = useState(null);

  const updateDebugInfo = useCallback((info) => {
    setDebugInfo(info);
  }, []);

  return <DevContext.Provider value={{ debugInfo, setDebugInfo: updateDebugInfo }}>{children}</DevContext.Provider>;
}

export const useDevInfo = () => useContext(DevContext);
