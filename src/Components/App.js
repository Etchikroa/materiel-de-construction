import { useState, useEffect } from "react"
import ShoppingList from "./ShoppingList"
import logo from "../Assets/logo.jpg"
import Banner from "./Banner"
import Cart from "./Cart"
import Footer from "./Footer"
import "../Styles/Layout.css"
function App() {
  const savedMateriel = localStorage.getItem("cart")
  const [cart, updateCart] = useState(savedMateriel?JSON.parse(savedMateriel):[]);
  useEffect(
    ()=>localStorage.setItem("cart", JSON.stringify(cart), [cart])
  )
  
  return (
    <div className="App">
      <Banner>
        <div className="lmp-banner">
          <h1>Materiels de construction</h1>
          <img src={logo} alt="logo" className="lmj-logo"/>
        </div>
      </Banner >
      <div className="lmj-layout">
        <Cart cart={cart} updateCart = {updateCart}/> 
        <ShoppingList cart={cart} updateCart = {updateCart} /> 
      </div>
      <Footer />
    </div>
  );
}

export default App;
