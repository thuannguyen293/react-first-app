import React from "react";

function SearchBar({onFilterTextChange, onIsStockChange, filterText, isStockOnly}) {
    function changeFilterText(e){
        onFilterTextChange(e);
    }
    function changeIsStockOnly(e){
        onIsStockChange(e);
    }
    return (
        <form>
            <input type="text" placeholder="Search..." value={filterText} onChange={changeFilterText}/>
            <p>
                <input type="checkbox" checked={isStockOnly} onChange={changeIsStockOnly}/>
                {' '}
                Only show products in stock
            </p>
        </form>
    )
}

export default SearchBar;