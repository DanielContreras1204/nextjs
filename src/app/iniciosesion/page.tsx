"use client"

import { auth } from "@/firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const router = useRouter()

    const iniciarSesion = async () => {
        alert("hola")
        try {
            const result = await signInWithEmailAndPassword(auth, email, password)
            alert("exito, pase")
            router.push('/')
        } catch (error) {
            alert(error)
        }

    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-400 to-blue-500">
            <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md">
                <div className="text-center mb-6">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">WELCOME RUIX</h1>
                    <h2 className="text-lg text-gray-600">Welcome to Ruix Dashboard Community</h2>
                </div>
                <div className="flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <input onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Email"
                        className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <input onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="Password"
                        className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <h1 className="text-center">¿Olviaste tu contraseña?</h1>
                </div>
                <button onClick={iniciarSesion}
                    className="w-full mt-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300"
                >
                    Iniciar
                </button>

            </div>
        </div>
    );
}