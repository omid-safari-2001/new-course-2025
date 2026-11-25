const UserInfo = ({ name, age, email, handleDelete }) => {
    return (
        <div>
            <ul>
                <li>name: {name}</li>
                <li>age: {age}</li>
                <li>email: {email}</li>
                <li>
                    <button onClick={() => handleDelete(name)}>delete</button>
                </li>
            </ul>
        </div>
    );

};
export default UserInfo;