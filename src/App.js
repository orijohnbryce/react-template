import Counter from "./components/Counter";
import People from "./components/People";
import Person from "./models/person-model";

const people = [
    new Person("David", "Cohen", 40, "A", "123"),
    new Person("Moshe", "Cohen", 10, "B", "456"),
    new Person("Yuda", "Cohen", 20, "C", "789"),
    new Person("Benni", "Cohen", 0, "D", "9090"),
    new Person("Or", "Cohen", 4, "E", "51050")
]

function App() {
  return (
    <div>
      {/* <Counter/> */}
      <People people={people}/>
    </div>
  );
}

export default App;
