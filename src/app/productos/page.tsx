

export default async function Page() {
    const data = await fetch(`https://fakestoreapi.com/products`);
    const productos = await data.json();
    // const [product,setproduct ] = useState ()
    // const [favorito,setfavorito] = useState ([])

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Productos</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {productos.map((producto) => (
                    <div 
                        key={producto.id} 
                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                    >
                        <img 
                            src={producto.image} 
                            alt={producto.title} 
                            className="w-full h-48 object-contain p-4"
                        />
                        <div className="p-4">
                            <h2 className="text-lg font-semibold text-gray-800 mb-2 truncate">
                                {producto.title}
                            </h2>
                            <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                                {producto.description}
                            </p>
                            <p className="text-xl font-bold text-blue-600">${producto.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}