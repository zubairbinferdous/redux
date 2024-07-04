import React, { createContext, ReactNode, useReducer } from "react";

export const TodoContext = createContext<
  { state: TodoList[]; dispatch: React.Dispatch<TAction> } | undefined
>(undefined);

type TodoProviderProps = {
  children: ReactNode;
};
type TodoList = {
  title: string;
  id: string;
  isCompleted: boolean;
};

type TAction = {
  type: string;
  payload: TodoList;
};

const initialState: TodoList[] = [];
const reducer = (currentState: TodoList[], action: TAction) => {
  switch (action.type) {
    case "addTodo":
      return [...currentState, action.payload];
    default:
      return currentState;
  }
};

const TodoProvider = ({ children }: TodoProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const values = {
    state,
    dispatch,
  };
  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
