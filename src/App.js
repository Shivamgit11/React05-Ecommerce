import { useContext, useState } from "react";
import { Route, Redirect } from "react-router-dom";

import "./App.css";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/footer";
import Store from "./components/Store/Store";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import ABOUT from "./components/Pages/About";
import HOME from "./components/Pages/Home";
import Contact from "./components/Pages/Contact";
import LOGIN from "./components/Pages/Auth";
import AuthContext from "./store/auth-context";

function App() {
  const [cartState, setCartState] = useState(false);
  const authCtx = useContext(AuthContext);

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
        {!authCtx.isLoggedIn && (
          <Route path="/login">
            <LOGIN />
          </Route>
        )}

        <Route path="/home">
          <HOME />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </main>
      <Route path="/store">
        <main>
          {cartState && <Cart onClick={onClickCartHandler} />}
          {console.log("dsjjsjgj")};
          <Store />
        </main>
      </Route>
      <Route path="/store">
        {!authCtx.isLoggedIn && <Store />}

        {authCtx.isLoggedIn && <Redirect to="/login" />}
      </Route>

      <Footer />
    </CartProvider>
  );
}

export default App;
