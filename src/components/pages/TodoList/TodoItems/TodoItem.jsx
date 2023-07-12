import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { StatusMap } from "../../../providers/TodoItemsProvider";

export default function TodoItem({ onDone, onCancelDone, status, title, id }) {
  const navigate = useNavigate();

  const handleMove = () => {
    navigate(`/${id}`);
  };

  return (
    <Container>
      {status === StatusMap.DONE && (
        <CheckButton isDone={true} onClick={() => onCancelDone(id)} />
      )}
      {status === StatusMap.NOT_YET && (
        <CheckButton isDone={false} onClick={() => onDone(id)} />
      )}
      <Title isDone={status === StatusMap.DONE}>{title}</Title>
      <MoveButton onClick={handleMove}>{">"}</MoveButton>
    </Container>
  );
}

const Container = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  margin-left: 10px;
  color: ${({ isDone }) => (isDone ? "#BDBDBD" : "#000000")};
  font-weight: bold;
  font-size: 16px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 8px;
    transition: width 0.2s ease-in-out;
    width: ${({ isDone }) => (isDone ? "100%" : "0")};
    height: 2px;
    background-color: #818181;
  }
`;

const MoveButton = styled.button`
  border: none;
  background: transparent;
  align-self: flex-end;
  margin-left: auto;
  padding: 3px 7px;
  border-radius: 5px;
  color: #000000;
  font-weight: bold;
  border: 1px solid #000000;
`;

const CheckButton = styled.button`
  width: 26px;
  height: 26px;
  border-radius: 5px;
  background: ${(props) => (props.isDone ? "#BF5AFD" : "#f2f2f2")};
  border: 1px solid #000000;
`;
