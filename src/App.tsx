import "./styles.css";
import Todo from "./models/todo";
import Todos from "./components/Todos";
import NewTodo from "./components/Form";
import { useState } from "react";

export default function App() {
  // Primitives: number, string, boolean
  // More complex types: arrays, objects
  // Function types, parameters

  let age: number;
  age = 21;
  let userName: string;
  userName = "Max";
  let isInstructor: boolean;
  isInstructor = true;
  console.log(age, userName, isInstructor);

  // Type Aliases  //

  //1. Not repeteting code
  //

  type Person = {
    name: string;
    age: number;
  };

  // let hobbies: null; not using

  /* Complex types */

  //  Array string:
  // let hobbies: number[];
  // let hobbies: boolean[];

  let hobbies: string[];
  hobbies = ["sports", "cooking"];

  //  Object:
  //let person: any; //basically back to standard JavaScript
  let person: Person;

  person = {
    name: "Max",
    age: 31
  };

  /* person={ // Arror 
    isEmployeer: true
  } */
  // Array  Objects:
  let people: Person[];

  people = [{ name: "Max", age: 23 }];

  console.log(hobbies, person, people);

  //  Inference type
  //let course = 'React - The Complete Guide'; //
  // course  = 123123 // Base feature in tscript

  // Union type that allows more one type

  let course: string | number = "React - The Complete Guide";
  course = 123123; // Base feature in tscript
  console.log(course);

  // Function & types

  function add(a: number, b: number): number | string {
    // --> что возвращает функиця  ):number | string
    return a + b;
  }

  add(14, 13);

  // if type void -> this function never return data
  function print(value: any) {
    console.log(value);
  }

  print("sad");

  // Generics

  /*   function inserAtBegining(array: any[], value: any) {
    const newArray = [value, ...array];

    return newArray;
  }

  const demoArray = [1,2,3];

  const updatedArray = inserAtBegining(demoArray, -1); // [-1, 1, 2, 3] */

  // Generics  sintax

  /*   function inserAtBegining<T>(array: T[], value: T) {
    // <T> одинаковый тип в водимых занчений
    const newArray = [value, ...array];

    return newArray;
  }

  const demoArray = [1, 2, 3];
  const updatedArray = inserAtBegining(demoArray, -1); // [-1, 1, 2, 3]
  const stringArray = inserAtBegining(["a", "b"], "d");  */
  /*   updatedArray[0].split(""); */

  // const todos = [new Todo("LEARN react"), new Todo("LEARN typeSctipt")];

  const [todos, setTodos] = useState<Todo[]>([]); //<Todo[]> -> use model array -> use alias

  const onAddTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  return (
    <div className="App">
      <h1>Hello</h1>
      <h2>Start editing to see some magic happen!</h2>
      <NewTodo onAddTodo={onAddTodoHandler} />
      <Todos items={todos} />
    </div>
  );
}
