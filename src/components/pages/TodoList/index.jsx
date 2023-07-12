import React from "react";
import MobilePageLayout from "../../shared/MobilePageLayout";
import { Spacing } from "../../shared/Spacing";
import TodoItems from "./TodoItems";

function TodoList() {
  return (
    <MobilePageLayout>
      <h1>TODO</h1>
      <Spacing size={38} />
      <TodoItems />
    </MobilePageLayout>
  );
}

export default TodoList;
