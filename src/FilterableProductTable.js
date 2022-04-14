import React, {useState} from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function FilterableProductTable(props) {

    const [filterText, setFilterText] = useState('');
    const [isStockOnly, setIsStockOnly] = useState(false);

    function changeFilterText(e){
        setFilterText(e.target.value);
    }
    function changeIsStockOnly(e){
        setIsStockOnly(e.target.checked)
    }

    return (
        <div>
            <SearchBar
                filterText={filterText}
                isStockOnly={isStockOnly}
                onFilterTextChange={changeFilterText}
                onIsStockChange={changeIsStockOnly}
            />
            <ProductTable
                products={props.products}
                filterText={filterText}
                isStockOnly={isStockOnly}
            />
        </div>
    )
}

export default FilterableProductTable;