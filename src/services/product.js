import { fetchApi } from "../utils/api";

export const getProducts = async (searchQuery = "", categoryId = "") => {
    const params = new URLSearchParams();

    if (searchQuery) params.append("productname", searchQuery);
    if (categoryId) params.append("categoryId", categoryId);

    const queryString = params.toString() ? `?${params.toString()}` : "";
    return await fetchApi(`/products${queryString}`);
};

export const getProductById = async (id) => {
    return await fetchApi(`/products/${id}`);
};

export const createProduct = async (productData) => {
    return await fetchApi("/products", {
        method: "POST",
        body: JSON.stringify(productData),
    });
};

export const updateProduct = async (id, productData) => {
    return await fetchApi(`/products/${id}`, {
        method: "PUT",
        body: JSON.stringify(productData),
    });
};

export const deleteProduct = async (id) => {
    return await fetchApi(`/products/${id}`, {
        method: "DELETE",
    });
};
