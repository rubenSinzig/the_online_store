// import { useState } from "react"; // <-- for searchbar
import { Store, StoreContext } from "./context";
import ProductList from "./components/ProductList";
import Header from "./components/Header";

function App() {
  return (
    <StoreContext.Provider value={Store}>
      <Header />

      <ProductList />
    </StoreContext.Provider>
  );
}

export default App;
