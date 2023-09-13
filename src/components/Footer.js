import { useState } from "react";
import '../styles/Footer.css';

function Footer() {
    const[inputValue, setInputValue] = useState('')

    function handleInput(e){
        setInputValue(e.target.value)
    }

    function handleBlur() {
        if(!inputValue.includes('@')){
            alert("Attention ceci n'est pas une adresse valide")
        }
    }
    return (
        <footer className='lmj-footer'>
            <div class='lmj-footer-elem'>
                Pour les passionnées de plantes 🌿🌱🌵
            </div>
            <div className="lmj-footer-elem">Laissez nous votre email:</div>
                <input 
                    placeholder="Entrez votre mail"
                    onChange={handleInput}
                    value={inputValue}
                    onBlur={handleBlur}
                />
        </footer>
    )
}

export default Footer