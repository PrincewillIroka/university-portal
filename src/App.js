import { useReducer } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home, About, Programs, Contact, Auth, Program } from "./pages";
import { StateContext, reducer } from "./store";

function App() {
  const [state, dispatch] = useReducer(reducer);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/signup" element={<Auth />} />
          <Route path="/program/:program_name" element={<Program />} />
        </Routes>
      </Router>
    </StateContext.Provider>
  );
}

export default App;
