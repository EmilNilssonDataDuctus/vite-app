import React, { useEffect, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import { MainWrapper } from "../../Shared/Page.styled";
import { AddNewTodo } from "./AddNewTodo";
import { TodosStatus } from "./DumbComponents/TodosStatus";
import { TodoComponent } from "./TodoComponent";
import { initialseStateOfTodos } from "./utils/initialseTodoApp";

export type TodoType = {
  id: number;
  task: string;
  completed: boolean;
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case "SET_TODOS": {
      return action.payload;
    }

    case "TOGGLE_TODO": {
      return state.map((todo) => {
        return todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo;
      });
    }

    case "ADD_TODO": {
      return [...state, action.payload];
    }

    default: {
      return state;
    }
  }
};

export const TodoPage = () => {
  // const [todos, setTodos] = useState<Array<TodoType>>(initialseStateOfTodos);
  const [todos, dispatch] = useReducer(todoReducer, initialseStateOfTodos);

  const addNewTodo = (task) => {
    dispatch({
      type: "ADD_TODO",
      payload: {
        completed: false,
        id: uuidv4(),
        task,
      },
    });
  };

  const updateTodoStatus = (todoId) => {
    dispatch({
      type: "TOGGLE_TODO",
      payload: todoId,
    });

    // -- old solution using useState:
    // this is a black box
    // setTodos([
    //   ...todos.map((todo) => {
    //     if (todo.id === todoId) {
    //       return {
    //         ...todo,
    //         complete: !oldStatus,
    //       };
    //     }
    //     return todo;
    //   }),
    // ]);

    // -- old but better solution using useState
    // this is even more compact, but sursprisingly easier to read
    // setTodos([
    //   ...todos.map((todo) =>
    //     todo.id === todoId ? { ...todo, completed: !oldStatus } : todo
    //   ),
    // ]);
  };

  // runs after the todo array has been altered
  useEffect(() => {
    localStorage.setItem("storedTodos", JSON.stringify(todos));
  }, [todos]);

  return (
    <MainWrapper>
      <h1>Todo list</h1>
      <TodosStatus todos={todos} />
      <AddNewTodo addNewTodo={addNewTodo} />
      <ul>
        {todos.map((todo) => (
          <TodoComponent
            key={todo.id}
            {...todo}
            updateTodoStatus={updateTodoStatus}
          />
        ))}
      </ul>
    </MainWrapper>
  );
};
