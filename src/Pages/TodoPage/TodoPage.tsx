import React, { useEffect, useReducer } from "react";
import { toast } from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";
import { MainWrapper } from "../../Shared/Page.styled";
import { AddNewTodo } from "./AddNewTodo";
import { TodosStatus } from "./DumbComponents/TodosStatus";
import { TodosTotalTimeEstimated } from "./DumbComponents/TodosTotalTimeEstimated";
import { TodoComponent } from "./TodoComponent";
import { initialseStateOfTodos } from "./utils/initialseTodoApp";

export type TodoType = {
  id: number;
  task: string;
  completed: boolean;
  timeToDeliver: number;
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

    case "EDIT_TODO_TASK": {
      return state.map((todo) => {
        return todo.id === action.payload.id
          ? { ...todo, task: action.payload.task }
          : todo;
      });
    }

    case "EDIT_TODO_TIME_TO_DELIVER": {
      return state.map((todo) => {
        return todo.id === action.payload.id
          ? { ...todo, timeToDeliver: action.payload.time }
          : todo;
      });
    }

    case "ADD_TODO": {
      return [...state, action.payload];
    }

    case "DELETE_TODO": {
      return state.filter((todo) => todo.id !== action.payload);
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
    toast("New todo added");
    dispatch({
      type: "ADD_TODO",
      payload: {
        completed: false,
        id: uuidv4(),
        task,
      },
    });
  };

  const deleteTodo = (todoId) => {
    toast("Todo deleted");
    dispatch({
      type: "DELETE_TODO",
      payload: todoId,
    });
  };

  const updateTodoTask = (id, task) => {
    toast("Todo updated: description");
    dispatch({
      type: "EDIT_TODO_TASK",
      payload: { id, task },
    });
  };

  const updateTodoTimeToDeliver = (id, time) => {
    toast("Todo updated: time");
    dispatch({
      type: "EDIT_TODO_TIME_TO_DELIVER",
      payload: { id, time },
    });
  };

  const updateTodoStatus = (todoId) => {
    toast("Todo updated: status");
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
      <ul
        style={{
          backgroundColor: "rgba(0, 0, 255, 0.4)",
        }}
      >
        {todos.map((todo) => (
          <TodoComponent
            key={todo.id}
            {...todo}
            updateTodoStatus={updateTodoStatus}
            deleteTodo={deleteTodo}
            updateTodoTask={updateTodoTask}
            updateTodoTimeToDeliver={updateTodoTimeToDeliver}
          />
        ))}
      </ul>
      <TodosTotalTimeEstimated todos={todos} />
    </MainWrapper>
  );
};
