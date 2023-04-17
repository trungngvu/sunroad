import { createContext, useState } from "react";

export const Data = createContext(null);

function Context({ children, data }) {
  const [message, setMessage] = useState(data);

  return (
    <Data.Provider value={{ message, setMessage }}>{children}</Data.Provider>
  );
}

export default Context;
