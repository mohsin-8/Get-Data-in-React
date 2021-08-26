import React, { useState, useEffect } from 'react';

function App() {
  let data = { title: "Waiting for Data" };
  const [todo, setTodo] = useState(data);
  const [isFetching, setFetching] = useState(data);

  useEffect(() => {
    async function fetchData() {
      setFetching(true);
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      console.log('response: ', response);

      let data2 = await response.json();
      setTodo(data2);
      setFetching(false);
      console.log('Data: ', todo);
    }
    fetchData();
  }, [6]);
  if (isFetching) {
    return <div>Data Loading...</div>
  }
  return (
    <div>
      Hello World: {todo.title}
      <p>{todo.userId}</p>
    </div>
  )
}

export default App;
