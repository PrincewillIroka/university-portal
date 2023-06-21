import { createContext, useContext } from "react";
import reducer from "./reducer";

const StateContext = createContext();
const useStateValue = () => useContext(StateContext);

export { StateContext, reducer, useStateValue };
