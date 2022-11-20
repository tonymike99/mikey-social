import { createContext, useContext, useState, useEffect } from "react";

const defaultObj = {};
const OthersContext = createContext(defaultObj);

const OthersProvider = ({ children }) => {
  const [searchBarText, setSearchBarText] = useState("");

  const valueObj = { searchBarText, setSearchBarText };

  return (
    <OthersContext.Provider value={valueObj}>{children}</OthersContext.Provider>
  );
};

const useOthers = () => useContext(OthersContext);

export { OthersProvider, useOthers };
