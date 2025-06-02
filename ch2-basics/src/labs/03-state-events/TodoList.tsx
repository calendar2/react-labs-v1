import { useState } from "react";

type TodoType = {
  id: number;
  text: string;
};

function TodoList() {
  const [todoId, setTodoId] = useState(1);
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [inputText, setInputText] = useState("");

  const addTodo = () => {
    setTodos([...todos, { id: todoId, text: inputText }]);
    setInputText("");
    setTodoId(todoId + 1);
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="할 일 작성"
        onChange={(e) => setInputText(e.target.value)}
        value={inputText}
      />
      <button onClick={addTodo}>추가</button>
      {todos.length > 0 ? (
        todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <button onClick={() => deleteTodo(todo.id)}>삭제</button>
          </li>
        ))
      ) : (
        <div>할 일이 없습니다.</div>
      )}
    </div>
  );
}

export default TodoList;
