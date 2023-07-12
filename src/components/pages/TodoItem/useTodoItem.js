import { useMemo } from "react";
import { useParams } from "react-router-dom";
import useTodoItems from "../../hooks/useTodoItems";

export function useTodoItem() {
  const { id } = useParams();
  const {
    items,
    onDone: handleDone,
    onCancelDone: handleCancelDone,
  } = useTodoItems();

  const item = useMemo(() => items.find((item) => item.id === id), [items, id]);
  const onDone = useMemo(() => () => handleDone(id), [id, handleDone]);
  const onCancelDone = useMemo(
    () => () => handleCancelDone(id),
    [id, handleCancelDone]
  );

  console.log("item", item);

  return { item, onDone, onCancelDone };
}
