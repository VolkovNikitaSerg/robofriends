import React from 'react';

const SearchBox = ({searchChange}) => {
    return (
        <div>
            <input onChange = {searchChange} className = "form-control" type = "search" placeholder = "Search robots" />
        </div>
    );
}

export default SearchBox;