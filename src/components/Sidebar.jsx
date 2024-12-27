import React from 'react';
import { createQueryObject } from '../helpers/helper';
//Icons
import { FaListUl } from "react-icons/fa";
import styles from "./Sidebar.module.css"
import { categories } from '../constants/list';


const Sidebar = ({ query, setQuery }) => {
    const categoriHandler = (event) => {
        const { tagName } = event.target;
        const category = event.target.innerText.toLowerCase();
        if (tagName !== "LI") return;
        setQuery((query) => createQueryObject(query, { category }));
    };
    return (
        <div className={styles.sidebar}>
            <div>
                <FaListUl />
                <p>Categories</p>
            </div>
            <ul onClick={categoriHandler}>
                {
                    categories.map((item) => (
                        <li key={item.id} className={item.type.toLowerCase() === query.category ? styles.selected : null}>
                            {item.type}
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default Sidebar;