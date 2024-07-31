import "../Styles/Categorie.css"
function Categories({categories,  setCategories}){
    return(
        <select className="lmj-select"
        onChange={(e)=>setCategories(e.target.value)}
        >
            <option value="">______</option>
            {
                categories.map((cat)=>
                <option key={cat} value={cat}>{cat}</option>
                )
            }
        </select>
    )
}
export default Categories