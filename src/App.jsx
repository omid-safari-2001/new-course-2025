import Car from "./Car";

const App =() => {

  return (
    <div>
      <Car make="toyota" model="camry" year={2022} color="blue" price="$23000"/>
      <Car make="honda" model="civic" year={2025} color="red" price="$46000"/>
    </div>
  );
}

export default App;
