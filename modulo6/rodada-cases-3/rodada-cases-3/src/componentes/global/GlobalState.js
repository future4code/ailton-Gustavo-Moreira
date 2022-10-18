import React from "react";
import { useState } from "react";
import { GlobalContext } from "./GlobalContext";


const GlobalState = (props) => {
  const [loterias, setLoterias] = useState();
  const [value, setValue] = useState("");
  
  const states = { loterias, value };
  const setters = { setLoterias, setValue };
  const requests = {};

  const Provider = GlobalContext.Provider;

  return (
    <Provider value={{ states, setters, requests }}>{props.children}</Provider>
  );
};

export default GlobalState;