import { useState } from "react";
import { Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/footer";
import Store from "./components/Store/Store";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import ABOUT from "./components/Pages/About";
import HOME from "./components/Pages/Home";
function App() {
  const [cartState, setCartState] = useState(false);

  const onClickCartHandler = () => {
    setCartState((prevState) => {
      return !prevState;
    });
  };

  return (
    <CartProvider className="App">
      
      <Header onClick={onClickCartHandler} />
      <main>
      <Route path="/about">
          <ABOUT />
      </Route>
      <Route path="/home">
          <HOME />
      </Route>
      </main>
      <Route path="/store">
      <main>
        {cartState && <Cart onClick={onClickCartHandler} />}
        <Store />
      </main>
      </Route>
      
      
      <Footer />
    </CartProvider>
  );
}

export default App;
