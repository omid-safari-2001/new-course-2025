import UserInfo from "./UserInfo";

const App = () => {
return (
    <div>

      <UserInfo name="omid" age={25} email="test1@gmail.com" />
      <UserInfo name="ali" age={26} email="test2@gmail.com" />
      <UserInfo name="reza" age={20} email="test3@gmail.com" />
      <UserInfo name="sina" age={44} email="test4@gmail.com" />

    </div>

  );
}

export default App;
