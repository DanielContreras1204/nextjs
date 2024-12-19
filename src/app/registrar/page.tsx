  "use client";
  import { auth } from "@/firebase/config";
  import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
  import { useState } from "react";

  export default function RegisterPage() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [nombre, setNombre] = useState();
    const [confirmar, setConfirmar] = useState();

    const provider = new GoogleAuthProvider();

    const registrarseConGoogle = async () => {
      try {
        const result = await signInWithPopup(auth, provider);
        console.log("Successfully signed in with Google:", result.user);
      } catch (error) {
        console.error("Error during Google sign-in: ", error.message);
      }
    };
    


    const registrarUsuario = async () => {
      try {
        const result = await createUserWithEmailAndPassword(auth, email, password);
        console.log(result);
      } catch (error) {
        console.error("Error creating user: ", error.message);
      }
    };

    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-400 to-blue-500">
        <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md">
          <div className="text-center mb-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">REGÍSTRATE</h1>
            <h2 className="text-lg text-gray-600">Únete a nuestra comunidad</h2>
          </div>
          <div className="flex flex-col gap-4">
            <input
              onChange={(e) => setNombre(e.target.value)}
              type="text"
              placeholder="Nombre completo"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Correo electrónico"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Contraseña"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              onChange={(e) => setConfirmar(e.target.value)}
              type="password"
              placeholder="Confirma tu contraseña"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            onClick={registrarUsuario}
            className="w-full mt-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300"
          >
            Registrarse
          </button>
          <p className="text-center mt-4 text-sm text-gray-600">
            ¿Ya tienes una cuenta? <a href="#" className="text-blue-500 hover:underline">Inicia sesión</a>
          </p>
          <button
            onClick={registrarseConGoogle}
            className="w-full mt-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300"
          >Inicia con google</button>
        </div>
      </div>
    );
  }
