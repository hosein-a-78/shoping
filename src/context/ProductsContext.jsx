//Hoks
import { createContext, useContext, useEffect, useState } from "react";

//fech api
import api from "../services/config";

//create context
const ProductContext = createContext();


const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // const response = await api.get("/products");
                // tamiz shodan code
                setProducts(await api.get("/products"));

            } catch (error) {
                console.log(error.message);
            }
        }
        fetchProducts();
    }, [])
    return (
        <ProductContext.Provider value={products}>
            {children}
        </ProductContext.Provider>
    );
};

//sakht function baraye gereftan data context 
const useProducts = () => {
    const products = useContext(ProductContext);
    return products;
}

export default ProductsProvider;
export { useProducts };