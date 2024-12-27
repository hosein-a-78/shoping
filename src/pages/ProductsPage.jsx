import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"



//Components
import Card from "../components/Card";
import Loader from "../components/Loader";
import { useProducts } from "../context/ProductsContext";
import { filterProducts, searchProducts, getInitialQuery } from "../helpers/helper";

//Styles
import styles from "./ProductsPage.module.css"
import SearchBox from "../components/SearchBox";
import Sidebar from "../components/Sidebar";

const ProductsPage = () => {
    const products = useProducts();
    const [displayed, setDisplayed] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState({});
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        setDisplayed(products)
        setQuery(getInitialQuery(searchParams));
    }, [products]);

    useEffect(() => {
        setSearchParams(query);
        setSearch(query.search || "");
        let finalProducts = searchProducts(products, query.search);
        finalProducts = filterProducts(finalProducts, query.category);
        setDisplayed(finalProducts);
    }, [query]);

    return (
        <>
            <SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />
            <div className={styles.container}>
                {!displayed.length && <Loader />}
                <div className={styles.products}>
                    {displayed.map((p) => (
                        <Card key={p.id} data={p} />
                    ))}
                </div>
                <Sidebar query={query} setQuery={setQuery} />
            </div>
        </>
    );
};

export default ProductsPage;