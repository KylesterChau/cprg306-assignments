
export default function Item({ name, quantity, category }) {

    return (
        <ul>
            <li  className="border-2 border-gray-700 rounded-lg m-2 p-2 flex flex-col items-center font-sans bg-gray-500 text-white">
                <p className="">{name}</p>
                <p>Quantity: {quantity}</p>
                <p>Category: {category}</p>
            </li>
        </ul>
    );
}