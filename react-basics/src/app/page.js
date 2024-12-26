'use client';

import Image from "next/image";
import Nav from './../components/Nav';
import Add from './../components/Add';

import { useState } from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';





export default function Home() {
  let title = "Hi Merveeee!";
  const [theme, setTheme] = useState("light"); // useState ile tema durumunu yönetiyoruz

  // Tema değiştirme fonksiyonu
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
  };


  return (
    <div className={theme}> 

      <Nav theme={theme} darkClick={toggleTheme}/>

 

      {/* <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1>{title}</h1>
      </div>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <Add/>
      </div> */}
    </div>
  );
}


