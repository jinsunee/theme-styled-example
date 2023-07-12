import { createContext, useReducer } from "react";

export const StatusMap = {
  DONE: "done",
  NOT_YET: "not_yet",
};

const initialState = [
  {
    id: "첫번째",
    title: "첫번째 할일",
    status: StatusMap.NOT_YET,
  },
  {
    id: "두번째",
    title: "두번째 할일",
    status: StatusMap.NOT_YET,
  },
  {
    id: "세번째",
    title: "세번째 할일",
    status: StatusMap.NOT_YET,
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "SET_DONE": {
      const { id } = action.payload;
      return state.map((item) => {
        if (item.id === id) {
          return { ...item, status: StatusMap.DONE };
        } else {
          return item;
        }
      });
    }
    case "SET_NOT_YET": {
      const { id } = action.payload;
      return state.map((item) => {
        if (item.id === id) {
          return { ...item, status: StatusMap.NOT_YET };
        } else {
          return item;
        }
      });
    }
    default: {
      return state;
    }
  }
}

export const TodoItemsContext = createContext(null);

export function TodoItemsProvider({ children }) {
  const [items, dispatch] = useReducer(reducer, initialState);

  // todo 완료하기
  const handleDone = (id) => {
    dispatch({ type: "SET_DONE", payload: { id } });
  };

  const handleCancelDone = (id) => {
    dispatch({ type: "SET_NOT_YET", payload: { id } });
  };

  return (
    <TodoItemsContext.Provider
      value={{ items, onDone: handleDone, onCancelDone: handleCancelDone }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
}
