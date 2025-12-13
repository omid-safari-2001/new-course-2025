
const Car = (props) => {
    return (
        <div className="car-details">
            <h2> car information</h2>

            <ul>
                <li>
                    <strong>make:</strong> {props.make}
                </li>
            </ul>
            <ul>
                <li>
                    <strong>Model:</strong> {props.model}
                </li>
            </ul>
            <ul>
                <li>
                    <strong>Year:</strong> {props.year}
                </li>
            </ul>
            <ul>
                <li>
                    <strong>Color:</strong> {props.color}
                </li>
            </ul>
            <ul>
                <li>
                    <strong>Price:</strong> {props.price}
                </li>
            </ul>

        </div>
    );
};

export default Car;