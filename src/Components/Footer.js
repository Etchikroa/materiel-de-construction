import "../Styles/Footer.css"
function Footer(){
    return(
        <footer className="footer">
            use this link to join my whatsapp voice call <a 
            href="https://call.whatsapp.com/voice/UbjQ1v69leoBjVXmwLiOwh"
            target="_blank"
            >whatsapp</a>
            <div className="item item1">
                <small>Notre mission</small>
                <p>Fonctionnalités</p>
                <p>Blog</p>
                <p> Sécurité</p>
                <p> Pour les entreprises</p>
            </div>
            <div className="item item2">
                <small>À propos de nous</small>
                <p>Emplois</p>
                <p>Espace Marque</p>
                <p>Confidentialité</p>
            </div>
            <div className="item item3">
                <small>Utiliser WhatsApp</small>
                <p>Android</p>
                <p>iPhone</p>
                <p>Mac/PC</p>
                <p>WhatsApp Web</p>
            </div>
            <div className="item item3">
                <small>Besoin d’aide ?</small>
                <p>Nous contacter</p>
                <p>Centre d’aide</p>
                <p>Télécharger</p>
                <p>Avis de sécurité</p>
            </div>
        </footer>
    )
}
export default Footer