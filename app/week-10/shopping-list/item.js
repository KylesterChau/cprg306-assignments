
export default function Item({ name, quantity, category, onSelect }) {

    return (
        <ul>
            <li onClick={() => onSelect({ name, quantity, category })} className="border-2 border-gray-700 rounded-lg m-2 p-2 flex flex-col items-center font-sans bg-gray-500 text-white hover:cursor-pointer hover:bg-gray-600">
                <p className="">{name}</p>
                <p>Quantity: {quantity}</p>
                <p>Category: {category}</p>
            </li>
        </ul>
    );
}