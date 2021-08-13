// import { useState } from "react"; // <-- for searchbar
import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { Store, StoreContext } from "./context";

import Header from "./components/Header";
import Nav from "./components/Nav";

function App() {
  return (
    <StoreContext.Provider value={Store}>
      <Header /> {/* "More Info" and "Buy" does not work yet */}
      <Nav />
    </StoreContext.Provider>
  );
}

export default App;
