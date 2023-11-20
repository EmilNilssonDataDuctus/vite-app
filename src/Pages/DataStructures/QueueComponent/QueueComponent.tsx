import React, { createRef, useReducer } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { v4 as uuidv4 } from "uuid";
import { DataSection } from "../DataStructures.styled";
import "./QueueComponentStyles.css";

const initialState = {
  queue: [],
};

const queueReducer = (state, action) => {
  switch (action.type) {
    case "ENQUEUE":
      return {
        ...state,
        queue: [...state.queue, action.payload],
      };

    case "DEQUEUE":
      const newQueue = [...state.queue].slice(1);
      return {
        ...state,
        queue: newQueue,
      };

    default: {
      return state;
    }
  }
};

export const QueueComponent = ({title, animationType}) => {
  const [state, dispatch] = useReducer(queueReducer, initialState);

  const handleClickAdd = (item) => {
    console.log("add", item);

    const id = uuidv4();
    dispatch({
      type: "ENQUEUE",
      payload: {
        value: item + ": " + id.slice(0, 6),
        nodeRef: createRef(null),
        id,
      },
    });
  };

  const handleClickRemove = () => {
    dispatch({ type: "DEQUEUE" });
  };

  return (
    <DataSection>
      <h2>{title}</h2>
      <button onClick={() => handleClickAdd(1)}>Add 1</button>
      <button onClick={() => handleClickAdd(2)}>Add 2</button>
      <button onClick={handleClickRemove}>Remove</button>
      <div>
        <TransitionGroup className="item-container">
          {state.queue
            .map(({ id, value, nodeRef }) => (
              <CSSTransition
                key={id}
                nodeRef={nodeRef}
                timeout={500}
                className={`item ${animationType}`}
              >
                <span ref={nodeRef}>{value}</span>
              </CSSTransition>
            ))
            .reverse()}
        </TransitionGroup>
      </div>
    </DataSection>
  );
};
