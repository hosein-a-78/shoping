import React from 'react';
import { createQueryObject } from '../helpers/helper';
//Icons
import { ImSearch } from "react-icons/im";

const SearchBox = ({ search, setSearch, setQuery }) => {

    const clickHandler = () => {
        setQuery((query) => createQueryObject(query, { search }));
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={e => setSearch(e.target.value.toLowerCase().trim())}
            />
            <button onClick={clickHandler}>
                <ImSearch />
            </button>
        </div>
    );
};

export default SearchBox;