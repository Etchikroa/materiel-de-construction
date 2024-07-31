import { useState, useEffect } from "react"
import "../Styles/Cart.css"
function Cart({cart, updateCart}){
    const [isOpen, setIsOpen] = useState(true)
    const total = cart.reduce((acc, article)=>
    acc + article.price * article.amount, 0
    )
    useEffect(
        ()=>{document.title = `MIC achat ${total}$`}, [total]
    )
return isOpen ? (
    <div className="lmj-cart">
        <button className="toggleBtn"
        onClick={()=>setIsOpen(false)}
        >Fermer</button>
        <h2 style={{fontSize:"1.2em"}}>Panier</h2>
        {
            (cart.length > 0) ?
            <>
                {
                    cart.map(({name, price, amount}, index)=>
                <li key={`${name}*${index}`}>
                    {name} {price} x {amount}
                </li>
                )
                }
                <strong>Total : {total}$</strong>
                <button className="reset-lmj" onClick={()=>updateCart([])}>vider</button>
            </> 
            : "votre panier est vide"
        }
        
    </div>
):(
    <div className="lmj-cart">
        <button className="toggleBtn" 
        onClick={()=>setIsOpen(true)}>Ouvrir</button>
   </div>
)
}
export default Cart