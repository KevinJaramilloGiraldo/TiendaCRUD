import { useEffect, useState, useContext } from "react";
import axios from "axios";
import AuthContext from "../context/AuthContext";

const Dashboard = () => {
  const [productos, setProductos] = useState([]);
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState(0);
  const [categoria, setCategoria] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [productoEditando, setProductoEditando] = useState(null);
  const { token, logout } = useContext(AuthContext);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products", { headers: { Authorization: token } })
      .then((res) => setProductos(res.data))
      .catch((err) => console.error(err));
  }, [token]);

  useEffect(() => {
    if (productoEditando) {
      setNombre(productoEditando.nombre);
      setDescripcion(productoEditando.descripcion);
      setPrecio(productoEditando.precio);
      setCategoria(productoEditando.categoria);
      setCantidad(productoEditando.cantidad);
    } else {
      setNombre("");
      setDescripcion("");
      setPrecio(0);
      setCategoria("");
      setCantidad(0);
    }
  }, [productoEditando]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nuevoProducto = { nombre, descripcion, precio, categoria, cantidad };
    
    if (productoEditando) {
      const { data } = await axios.put(
        `http://localhost:5000/api/products/${productoEditando._id}`,
        nuevoProducto,
        { headers: { Authorization: token } }
      );
      setProductos(productos.map((p) => (p._id === productoEditando._id ? data : p)));
      setProductoEditando(null);
    } else {
      const { data } = await axios.post(
        "http://localhost:5000/api/products",
        nuevoProducto,
        { headers: { Authorization: token } }
      );
      setProductos([...productos, data]);
    }

    setNombre("");
    setDescripcion("");
    setPrecio(0);
    setCategoria("");
    setCantidad(0);
  };

  const eliminarProducto = async (id) => {
    await axios.delete(`http://localhost:5000/api/products/${id}`, { headers: { Authorization: token } });
    setProductos(productos.filter((p) => p._id !== id));
  };

  const handleEditar = (producto) => {
    setProductoEditando(producto);
    setNombre(producto.nombre);
    setDescripcion(producto.descripcion);
    setPrecio(producto.precio);
    setCategoria(producto.categoria);
    setCantidad(producto.cantidad);
  };

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Dashboard</h2>
      <button className="logout-button" onClick={logout}>Cerrar sesión</button>

      <form className="product-form" onSubmit={handleSubmit}>
        <input className="input-field" type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
        <input className="input-field" type="text" placeholder="Descripción" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} required />
        <input className="input-field" type="number" placeholder="Precio" value={precio} onChange={(e) => setPrecio(e.target.value)} required />
        <input className="input-field" type="text" placeholder="Categoría" value={categoria} onChange={(e) => setCategoria(e.target.value)} required />
        <input className="input-field" type="number" placeholder="Cantidad" value={cantidad} onChange={(e) => setCantidad(e.target.value)} required />
        <button className="submit-button" type="submit">{productoEditando ? "Actualizar Producto" : "Agregar Producto"}</button>
        {productoEditando && <button className="cancel-button" type="button" onClick={() => setProductoEditando(null)}>Cancelar Edición</button>}
      </form>

      <div className="dashboard-table-container">
        <table className="product-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Precio</th>
              <th>Categoría</th>
              <th>Cantidad</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto) => (
              <tr key={producto._id}>
                <td>{producto.nombre}</td>
                <td>{producto.descripcion}</td>
                <td>${producto.precio}</td>
                <td>{producto.categoria}</td>
                <td>{producto.cantidad}</td>
                <td>
                  <button className="edit-button" onClick={() => handleEditar(producto)}>Editar</button>
                  <button className="delete-button" onClick={() => eliminarProducto(producto._id)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
