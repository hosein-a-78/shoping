import { useProducts } from "../context/ProductsContext";

const ProductsPage = () => {
    const products = useProducts();
    console.log(products);
    return (
        <div>
            products
        </div>
    );
};

export default ProductsPage;