export default function ContactFooter() {
    return (
        <footer className="bg-black text-white p-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Información de contacto */}
                <div>
                    <h2 className="text-2xl font-bold mb-4">Contáctanos</h2>
                    <p className="mb-2">Teléfono: +57 123 456 789</p>
                    <p className="mb-2">Email: contacto@cryptoplanet.com</p>
                    <p className="mb-2">Dirección: Calle 123, Bogotá, Colombia</p>
                </div>

                {/* Formulario de contacto */}
                <div>
                    <h2 className="text-2xl font-bold mb-4">Envíanos un mensaje</h2>
                    <form className="flex flex-col gap-4">
                        <input
                            type="text"
                            placeholder="Tu nombre"
                            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="email"
                            placeholder="Tu correo"
                            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <textarea
                            placeholder="Tu mensaje"
                            rows="4"
                            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                            Enviar
                        </button>
                    </form>
                </div>

                {/* Enlaces rápidos */}
                <div>
                    <h2 className="text-2xl font-bold mb-4">Enlaces rápidos</h2>
                    <ul className="flex flex-col gap-2">
                        <li><a href="/" className="hover:text-gray-400">Inicio</a></li>
                        <li><a href="/productos" className="hover:text-gray-400">Productos</a></li>
                        <li><a href="/about" className="hover:text-gray-400">Acerca de</a></li>
                        <li><a href="/contact" className="hover:text-gray-400">Contacto</a></li>
                    </ul>
                </div>
            </div>

            {/* Copyright */}
            <div className="mt-10 text-center text-sm text-gray-400">
                &copy; 2024 CryptoPlanet. Todos los derechos reservados.
            </div>
        </footer>
    );
}
