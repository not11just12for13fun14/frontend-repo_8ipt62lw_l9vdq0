import { Link } from 'react-router-dom'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-xl w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Fleetflow Demo</h1>
        <p className="text-gray-600 mb-6">Prueba el login funcional con backend listo. También puedes verificar la conexión con la base de datos.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link to="/login" className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">Ir a Login</Link>
          <Link to="/test" className="block text-center bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded">Probar Backend</Link>
        </div>
      </div>
    </div>
  )
}
