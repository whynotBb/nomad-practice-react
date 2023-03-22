import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const list = document.querySelector(".list");
  const onChange = (event) => {
    setToDo(event.target.value);
    console.log(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();

    console.log("add");
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);

    setToDo("");
  };
  // const onDelete = (event) => {
  //   console.log(event.target.parentElement.id);
  //   toDos.forEach((el) => {
  //     console.log(el);

  //   });
  // };
  return (
    <div className="App">
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="write"
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index} id={index}>
            {item}
            {/* <button onClick={onDelete}>delete</button> */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
