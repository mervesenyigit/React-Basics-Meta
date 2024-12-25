import Image from "next/image";

function Add()
{
  var a=10;
  var b=15;

  var result=a+b;
  return(
  <h2>{result}</h2>


  )
}



export default function Home() {
  let title = "Hi Merveeee!";
  return (
    <div>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1>{title}</h1>
      </div>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <Add/>
      </div>
    </div>
  );
}


