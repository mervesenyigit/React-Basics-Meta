'use client';
const ProductCard =({product})=>{
    const buttonStyle = {
       
        border: "none",
        padding: "10px 20px",
        fontSize: "16px",
        cursor: "pointer",
        borderRadius: "5px",
      };
      const clickButton= ()=>alert(`Added ${product.name} to cart!`);// bu yüzden fonksiyonu dısarıya aldım :))
    return(

        <div>
        <h3>{product.name}</h3>
        <p>Price: ${product.price}</p>
        <button className="btn btn-primary" style={buttonStyle} onClick={clickButton}>Add to Cart</button>    
         {/* arrow function'ı inline olarak yaptım mesela onclick çinde ama öyle olunca  her render da yeni fonks oluşr ve  performans sorunlarına yol açabilir.  */}
    </div>
    )




    
}
export default ProductCard;