import { useEffect, useState } from 'react';
import { updateCurso, getProduct } from '../../services/axios.config.js';
import { useParams, useNavigate } from 'react-router-dom';

const AdminEdit = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        stock: '',
        category: '',
        image: '',
        page: ''
    });
    useEffect(() => {
        const getProductos = async () => {
            const response = await getProduct(id);
            setFormData(response.data.producto);
        }
        getProductos()
    }, [id]);
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await updateCurso(id, formData);
        if (response.status === 201) { 
            navigate('/admin');
        }
    };
    return (
        <>
            <form className="form-container" onSubmit={handleSubmit} action='' method='POST' encType='multipart/form-data'>
                <div className="form-field">
                    <label>
                        Nombre:
                        <input type="text" name="name" value={formData.name} onChange={handleChange} />
                    </label>
                </div>
                <div className="form-field">
                    <label>
                        Descripción:
                        <input type="text" name="description" value={formData.description} onChange={handleChange} />
                    </label>
                </div>
                <div className="form-field">
                    <label>
                        Precio:
                        <input type="number" name="price" value={formData.price} onChange={handleChange} />
                    </label>
                </div>
                <div className="form-field">
                    <label>
                        Stock:
                        <input type="number" name="stock" value={formData.stock} onChange={handleChange} />
                    </label>
                </div>
                <div className="form-field">
                    <label>
                        Categoría:
                        <select name="category" value={formData.category} onChange={handleChange}>
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
                        <input type="text" name="image" value={formData.image} onChange={handleChange} />
                    </label>
                </div>
                <div className="form-field">
                    <label>
                        Página:
                        <input type="text" name="page" value={formData.page} onChange={handleChange} />
                    </label>
                </div>
                <button className="form-submit" type="submit">Actualizar</button>
            </form>
        </>
    )
}

export default AdminEdit