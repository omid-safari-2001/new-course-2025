import { useState } from "react";
import UserInfo from "./UserInfo";

const initialUsers = [

  { name: "ali", age: 18, email: "test1@gmail.com" },
  { name: "reza", age: 22, email: "test2@gmail.com" },
  { name: "sina", age: 25, email: "test3@gmail.com" },
  { name: "omid", age: 24, email: "test4@gmail.com" }

];

const App = () => {
  const [Users, setUsers] = useState(initialUsers);

  const handleDelete = (name) => {
    const newUsers = Users.filter((User) => User.name !== name);
    setUsers(newUsers);
  }
  return (
    <div>
      {Users.map((User) => (
        <UserInfo key={User.name} {...User} handleDelete={handleDelete} />
      ))}
    </div>
  );
};
export default App;
