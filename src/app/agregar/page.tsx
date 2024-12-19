"use client"
import { db } from "@/firebase/config";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react"

export default function page() {

    const [productos, setproductos] = useState()

    const agregar = async () => {
        try {
            const docRef = await addDoc(collection(db, "productos"), {
                nombre: productos
            });
            console.log(docRef);
        } catch (error) {
            console.error("Error al agregar el documento: ", error);
        }
    };

    return (
        <>
            <h1>Agregar</h1>
            <input  className="border border-black" onChange={(e)=>setproductos(e.target.value)} type="text" name="" id="" />
            <button onClick={()=>agregar()}>Agregar</button>
        </>
    )
}