export default function Item({ name, quantity, category }) {
    return (
        <ul>
            <li>
                <p>{name}</p>
                <p>Quantity: {quantity}</p>
                <p>Category: {category}</p>
            </li>
        </ul>
    );
}