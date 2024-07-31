import "../Styles/MaterielItem.css"
function MaterielItem({name,cover,price}){
    return(
        <>
            <li className="lmj-materiel">
                <img className="lmj-materiel-item" src ={cover} alt={name} 
                onClick={()=>alert(`Vous voulez acheter 1 ${name} ? tres bon choix 🥰🤙👏`)}
                />
                <span className="price">{price}$</span>
                <p>{name}</p>

            </li>
        </>
    )
}

export default MaterielItem