import React, {useState} from 'react';
import {FiSearch} from "react-icons/fi"
export function Search({onSearch}) {
    const [value, setValue] = useState("");
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            onSearch(value);
        }} className="search">
            <input value={value} onChange={(e) => setValue(e.target.value)} type="text" className="search_field" placeholder="Another region"/>
            <button disabled={value.length === 0} className="search_btn"><FiSearch size={30}/></button>
        </form>
    );
}

