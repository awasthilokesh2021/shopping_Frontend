import React, { createContext, useState } from "react";
import { Provider } from "react-redux";

export const Logincontext = createContext(null);

const Providercontext = ({ children }) => {
  const [account, setAccount] = useState("");
  return (
    <Logincontext.Provider value={{ account, setAccount }}>
      {children}
    </Logincontext.Provider>
  );
};

export default Providercontext;
