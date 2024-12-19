import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex text-white bg-black gap-6 justify-between p-7 items-center">
            <div>
            <img src="/kashe.jpg" alt="CryptoPlanet" className="h-24 w-24 object-contain rounded-full shadow-md" />

            </div>
            <ul className="flex gap-7">
                <li><a href="/" className="hover:text-gray-400">Home</a></li>
                <li><a href="/productos" className="hover:text-gray-400">About</a></li>
                <li><a href="/contact" className="hover:text-gray-400">Contact</a></li>
            </ul>
            <div className="flex gap-4">
                <Link href= {'/iniciosesion'} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">Iniciar sesión</Link>
                <Link href={'/registrar'} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">Registrar</Link>
            </div>
        </nav>
    );
}

