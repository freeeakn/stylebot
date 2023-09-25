import { useState } from "react";

function AppCategories(props) {
    const [categories, setCategories] = useState([
        {
            key: 'all',
            label: 'All wears',
        },
        {
            key: 'Tshort',
            label: 'T-shorts',
        },
        {
            key: 'sweater',
            label: 'Sweaters',
        },
        {
            key: 'jeans',
            label: 'Jeans',
        },
        {
            key: 'shoes',
            label: 'Shoes',
        }
    ]);
    return (
        <div className=" glass flex py-2 px-2 gap-8 mb-4">
        {
            categories.map(category =>(
                <div
                onClick={() => props.chooseCategory(category.key)}
                key={category.key}
                className="cursor-pointer p-2 rounded-xl hover:bg-slate-100 hover:drop-shadow-xl duration-200">
                    {category.label}
                </div>
            ))
        }
        </div>
    );
}

export default AppCategories;