import { createContext, useState } from "react";
export const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
    const [user , setUser] = useState();
  return (
    <SessionContext.Provider value={{ user, setUser }}>
      {children}
    </SessionContext.Provider>
  );
};
