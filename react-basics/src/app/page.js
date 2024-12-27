'use client';

import Image from "next/image";
import Nav from './../components/Nav';
import Add from './../components/Add';
import MyModal from './../components/MyModal';

import ProductCard from '../components/ProductCard.js';

import { useState } from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';






export default function Home() {
  let title = "Hi Merveeee!";
  const [theme, setTheme] = useState("light"); // useState ile tema durumunu yönetiyoruz

  // Tema değiştirme fonksiyonu
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
  };
  const a = 10;
  const b = 15;
  const result = a + b;
  const modalsList = [
    {
      id: 1, 
      username: "Merve",
      lastname: "Morsy",
      content: "Bu içerik Merve için."
    },
    {
      id: 2,
      username: "Ömer",
      lastname: "Morsy",
      content: "Bu içerik Ömer için."
    }
  ];

  const skills = ["Skill 1", "Skill 2"];
  const [isModalOpen, setIsModalOpen] = useState(false);

   const toggleModal = () => setIsModalOpen(!isModalOpen);
    const buttonStyle = {
    backgroundColor: theme === "light" ? "#4CAF50" : "#555", // Yeşil tema için açık, koyu tema için gri
    color: theme === "light" ? "white" : "black", // Tema ışığa bağlı renk
    border: "none",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "5px",
  };

  return (
    <div className={theme}> 

      <Nav theme={theme} darkClick={toggleTheme}/>

      <Add sonuc={result} />
      
      <button style={buttonStyle} onClick={toggleModal}>Open Modal</button>
      {isModalOpen && (
        <>
          {modalsList.map((modal) => (
            <MyModal 
              key={modal.id}
              username={modal.username} 
              lastname={modal.lastname} 
              handleClose={toggleModal}
            >
              <p>{modal.content}</p>
            </MyModal>
          ))}
        </>
      )}

   <ProductCard product={{ name: "Laptop", price: 1200 }} />

      {/* <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1>{title}</h1>
      </div>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <Add/>
      </div> */}
    </div>
  );
}


