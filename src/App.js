// import { useState } from "react"; // <-- for searchbar
import { Store, StoreContext } from "./context";
import ProductList from "./components/ProductList";

function App() {
  return (
    <StoreContext.Provider value={Store}>
      <h1>Online Store</h1>

      <ProductList />
    </StoreContext.Provider>
  );
}

export default App;
