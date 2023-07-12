import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Back } from "../../../assets/svg/back.svg";
import { StatusMap } from "../../providers/TodoItemsProvider";
import MobilePageLayout from "../../shared/MobilePageLayout";
import { Spacing } from "../../shared/Spacing";
import { useTodoItem } from "./useTodoItem";

function TodoItem() {
  const navigate = useNavigate();
  const { item, onDone, onCancelDone } = useTodoItem();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <MobilePageLayout>
      <Header>
        <BackButton onClick={handleBack}>
          <Back />
        </BackButton>
        {item.status === StatusMap.DONE ? (
          <CheckButton isDone={true} onClick={onCancelDone} />
        ) : (
          <CheckButton isDone={false} onClick={onDone} />
        )}
      </Header>
      <Spacing size={30} />
      <Title>{item.title}</Title>
    </MobilePageLayout>
  );
}

export default TodoItem;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BackButton = styled.button`
  border: none;
  background: none;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

const CheckButton = styled.button`
  width: 26px;
  height: 26px;
  border-radius: 5px;
  background: ${(props) => (props.isDone ? "#BF5AFD" : "#f2f2f2")};
  border: 1px solid ${(props) => (props.isDone ? "transparent" : "#000000")};
`;
