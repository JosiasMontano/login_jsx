/** @jsxImportSource react */

'use strict';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [showList, setShowList] = React.useState(null);
  const [userData, setUserData] = React.useState({
    nombre: '',
    usuario: '',
    fechaNacimiento: '',
    password: ''
  });

  // Datos de ejemplo para las listas
  const listas = {
    alimentos: ['Manzana', 'Pollo', 'Arroz', 'Pasta', 'Brócoli', 'Pan', 'Huevos'],
    actividades: ['Correr', 'Leer', 'Programar', 'Cocinar', 'Nadar', 'Dibujar', 'Meditar'],
    artistas: ['Coldplay', 'Bad Bunny', 'Taylor Swift', 'The Weeknd', 'Rosalía', 'Dua Lipa', 'Kendrick Lamar'],
    materias: ['Matemáticas', 'Física', 'Programación', 'Literatura', 'Historia', 'Biología', 'Arte'],
    amigos: ['Ana', 'Carlos', 'Marta', 'Luis', 'Sofía', 'Pedro', 'Elena']
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (userData.usuario && userData.password) {
      setLoggedIn(true);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  if (!loggedIn) {
    return (
      <div className="container">
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre completo"
            value={userData.nombre}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="usuario"
            placeholder="Usuario"
            value={userData.usuario}
            onChange={handleInputChange}
            required
          />
          <input
            type="date"
            name="fechaNacimiento"
            value={userData.fechaNacimiento}
            onChange={handleInputChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={userData.password}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Ingresar</button>
        </form>
      </div>
    );
  }

  if (showList) {
    return (
      <div className="container">
        <h2>Bienvenido, {userData.usuario}!</h2>
        <button onClick={() => setShowList(null)}>Volver</button>
        <ul>
          {listas[showList].map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>Bienvenido, {userData.usuario}!</h2>
      <button onClick={() => setShowList('alimentos')}>Alimentos</button>
      <button onClick={() => setShowList('actividades')}>Actividades</button>
      <button onClick={() => setShowList('artistas')}>Artistas Musicales</button>
      <button onClick={() => setShowList('materias')}>Materias</button>
      <button onClick={() => setShowList('amigos')}>Amigos</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);