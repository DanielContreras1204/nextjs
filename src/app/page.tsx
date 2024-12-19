import Link from "next/link";

export default function Home (){


  return (

    <>  
    <h1>Hola Mundo</h1>
    <Link href= {'/Perfil'}> ir al perfil </Link>
    </>

  )
}