import React, { createContext } from "react";
import { theme } from "../utilities/colors";

const GlobalContext = createContext({
  theme,
  rooms: [],
  setRooms: () => {},
});

export default GlobalContext;
