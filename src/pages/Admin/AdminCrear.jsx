import React, { useState } from 'react';
import './AdminCrear.css';
import { createCurso } from '../../services/axios.config.js';
import { useNavigate } from 'react-router-dom';


const AdminCrear = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [page, setPage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await createCurso({ name, description, price, stock, category, image, page });
    if (response.status === 201) {
      navigate('/admin');
    }
    // console.log(response);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit} action='' method='POST' encType='multipart/form-data'>
      <div className="form-field">
        <label>
          Nombre:
          <input type="text" name="name" onChange={(e) => setName(e.target.value)} />
        </label>
      </div>
      <div className="form-field">
        <label>
          Descripción:
          <input type="text" name="description" onChange={(e) => setDescription(e.target.value)} />
        </label>
      </div>
      <div className="form-field">
        <label>
          Precio:
          <input type="number" name="price" onChange={(e) => setPrice(e.target.value)} />
        </label>
      </div>
      <div className="form-field">
        <label>
          Stock:
          <input type="number" name="stock" onChange={(e) => setStock(e.target.value)} />
        </label>
      </div>
      <div className="form-field">
        <label>
          Categoría:
          <select name="category" onChange={(e) => setCategory(e.target.value)}>
            <option value="">Selecciona una opción</option>
            <option value="Cuadro">Cuadro</option>
            <option value="Sillon">Sillon</option>
            <option value="Living">Living</option>
            <option value="Lampara">Lampara</option>
            <option value="Dormitorio">Dormitorio</option>
            <option value="Mesas">Mesas</option>
            <option value="Decorado">Decorado</option>
            <option value="Hogar">Hogar</option>
            <option value="Comedor">Comedor</option>
          </select>
        </label>
      </div>
      <div className="form-field">
        <label>
          Imagen:
          <input type="text" name="image" onChange={(e) => setImage(e.target.value)} />
        </label>
      </div>
      <div className="form-field">
        <label>
          Página:
          <input type="text" name="page" onChange={(e) => setPage(e.target.value)} />
        </label>
      </div>
      <button className="form-submit" type="submit">Crear</button>
    </form>
  );
};

export default AdminCrear