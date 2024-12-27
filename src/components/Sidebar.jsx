import React from 'react';
import { createQueryObject } from '../helpers/helper';
//Icons
import { FaListUl } from "react-icons/fa";

const Sidebar = ({ setQuery }) => {
    const categoriHandler = (event) => {
        const { tagName } = event.target;
        const category = event.target.innerText.toLowerCase();
        if (tagName !== "LI") return;
        setQuery((query) => createQueryObject(query, { category }));
    };
    return (
        <div>
            <div>
                <FaListUl />
                <p>Categories</p>
            </div>
            <ul onClick={categoriHandler}>
                <li>All</li>
                <li>Electronics</li>
                <li>Jewelery</li>
                <li>Men's Clothing</li>
                <li>Women's Clothing</li>
            </ul>
        </div>
    );
};

export default Sidebar;