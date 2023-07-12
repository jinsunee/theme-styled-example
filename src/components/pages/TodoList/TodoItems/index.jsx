import React from "react";
import styled from "styled-components";
import useTodoItems from "../../../hooks/useTodoItems";
import TodoItem from "./TodoItem";

export default function TodoItems() {
  const { items, onDone, onCancelDone } = useTodoItems();

  return (
    <Container>
      {items.map((item) => (
        <TodoItem
          key={item.id}
          {...item}
          onDone={onDone}
          onCancelDone={onCancelDone}
        />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
