import React from 'react';
import {uzbRegions} from "../../assets/constants";

export function RegionsList({onItemClick}) {
    return (
        <ul className="regions-list">
            {uzbRegions.map(item => (
                    <li key={item} className="list_item" onClick={() => onItemClick(item)}>{item}</li>
                )
            )}
        </ul>
    );
}

