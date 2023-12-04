import axios from "axios";

const URL = "http://localhost:7777/product/v1";

export const getProducts = async () => {
    try {
        const response = await axios({
            url: `${URL}`,
            method: "GET",
        });
        return response;
    } catch (error) {
        console.log("Error al buscar productos:", error);
    }
};
export const getProduct = async (_id) => {
    try {
        const response = await axios({
            url: `${URL}/${_id}`,
            method: "GET",
        });
        return response;
    } catch (error) {
        console.log("Error al buscar producto:", error);
    }
};
export const createCurso = async (productoData) => {
    console.log(productoData.image);
    try {
        // const formData = new FormData();
        // formData.set("name", productoData.name);
        // formData.set("description", productoData.description);
        // formData.set("price", productoData.price);
        // formData.set("stock", productoData.stock);
        // formData.set("category", productoData.category);
        // formData.set("image", productoData.image);
        // formData.set("page", productoData.page);
        // formData.set("destacado", productoData.destacado);
        const response = await axios({
            url: `${URL}`,
            data: productoData,
            method: "POST",
        });
        return response;
    } catch (error) {
        console.log("Error al guardar los datos del producto", error);
    }
};
export const updateCurso = async (_id, datosNuevos) => {
    try {
        const response = await axios({
            url: `${URL}/${_id}`,
            method: "PUT",
            data: datosNuevos,
        });
        return response;
    } catch (error) {
        console.log("Error al actualizar el producto:", error);
    }
};

export const deleteCurso = async (_id) => {
    try {
        const response = await axios({
            url: `${URL}/${_id}`,
            method: "DELETE",
        });
        return response;
    } catch (error) {
        console.log("Error al eliminar el producto:", error);
    }
};
