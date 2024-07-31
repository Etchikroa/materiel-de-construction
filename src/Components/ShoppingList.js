import {useState} from "react"
import MaterielItem from "./MaterielItem"
import MaterielList from "../Data/MaterielLists"
import Categories from "./Categories"
import "../Styles/Categorie.css"
function ShoppingList({cart, updateCart}){
    const [categorie, setCategories] = useState("");
    const categories = MaterielList.reduce((acc,article)=>
    acc.includes(article.category)?acc:acc.concat(article.category),[]
    )
    const article = MaterielList.reduce((acc, art)=>
    acc.includes(art.name)?acc:acc.concat(art.name), []
    )
    function addToCart(name, price){
        const savedArticle = cart.find((articles)=>articles.name === name);
        const filterArticle = cart.filter((art)=>art.name !== name);
        if(savedArticle){
            updateCart([
                ...filterArticle, {name, price, amount:savedArticle.amount + 1}
            ])
        }else{
            updateCart([
                ...cart, {name, price, amount:1}
            ])
        }
    }
 
    return(
        <div>  
           <div className="shopping-lmj" style={{position:"relative",
                        top:"100px",
                        display:"inline-block",
                        margin:"10px"
                        }}>
           <Categories
            categories ={categories}
            const setCategories = {setCategories}
           />
           <button className="lmj-reset" onClick = {()=>setCategories("")}>reinitialiser</button>
           </div>
            <div className="lmj-shoppingList">
                {
                    MaterielList.map(({name,id,cover,light,water,price, category })=>
                        !categorie || categorie === category ? (
                        <div className="lmj-shopping-item" key={id}>
                            <MaterielItem 
                                name={name}
                                cover={cover}
                                light={light}
                                water={water}
                                price={price}
                            />
                            <div>
                                    <button onClick = {()=>addToCart(name,price)} className="addBtn">Ajouter</button>
                            </div>
                        </div>
                    
                ):null
            ) 
                }
               
            </div>
         
        </div>
    )
}
export default ShoppingList