"use strict"

import '../components/HamburgerMenu.css'


//React'te durum yönetimi (state) kullanmak en iyi yaklaşımdır. sen burada dom manipülasyonu yaptın .react felsefesine ters .
const HamburgerMenu=()=>{
      let hamburgerState = false;  // State yönetimi burada DOM içinde yapılacak.
    
    // Menü toggle fonksiyonu
    const toggleMenu = () => {
        hamburgerState = !hamburgerState;  // Durum değiştiriliyor
        console.log(hamburgerState);  
        const menu = document.querySelector('.menu');  // Menüyi seç
        if (hamburgerState) {
            menu.classList.add('menuopen');  // Menü açıldığında class ekleniyor
        } else {
            menu.classList.remove('menuopen');  // Menü kapandığında class kaldırılıyor
        }
    }
    return(


        <div className="menu d-flex justify-content-end "> 
            <ul >
                <li>Home </li>
                <li>About</li>
                <li>Contact</li>


            </ul>
            <button className="hamburger-btn " onClick={toggleMenu}> 
         
                  <span className={hamburgerState ? "hamburger-icon open" : "hamburger-icon"}>☰</span> 
            
            </button>


        </div>

    )
}

export default HamburgerMenu;