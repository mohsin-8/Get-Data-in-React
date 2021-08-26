import React, { useEffect, useState } from 'react';

function App() {
  let data = { title: "Waiting for Data" };

  const [todo, setTodo] = useState(data);

  useEffect(() => {

    async function fetchData() {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      console.log("response = ", response);

      let data2 = await response.json()
      setTodo(data2);

      console.log("Data = ", todo);
    }
    fetchData();
  }, [6]);

  return (
    <div>
      Hello world: {todo.title} <br />
      Id: {todo.id} <br />
      UserId: {todo.userId}
    </div>
  )
}

export default App;
