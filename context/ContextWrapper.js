import React, { useState } from "react";
import GlobalContext from "./Context";
import { theme } from "../utilities/colors";

export default function ContextWrapper(props) {
  const [rooms, setRooms] = useState([]);

  return (
    <GlobalContext.Provider value={{ theme, rooms, setRooms }}>
      {props.children}
    </GlobalContext.Provider>
  );
}
