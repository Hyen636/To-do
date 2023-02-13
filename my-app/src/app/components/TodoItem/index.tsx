import React from 'react';
import styled from 'styled-components';
import Block from '../Block';
import CircleButton from '../Button/CircleButton';
import Checkbox from '../Checkbox';
import TodoInput from '../TodoInput';

const Box = styled.div<{ isEditing: boolean }>`
  display: flex;
  align-itmes: center;
  padding: ${props =>
    props.isEditing ? '11px 15px 11px 25px' : '15px 15px 15px 25px'};
  widht: 100%;
  font-size: 1.1em;
  border-bottom: 1px solid #eee;

  & > .delete-button {
    display: none;
  }

  &:hover {
    padding: 10px 15px 10px 25px;

    & > .delete-button {
      display: flex;
    }
  }
`;

const TodoContent = styled.span<{ checked: boolean }>`
  overflow: hidden; //여기부터
  text-overflow: ellipsis; // ...으로 처리한다.
  work-wrap: break-work;
  display: -webkit-box;
  -websit-line-clamp: 3; //3째줄 이상부터는
  -webkit-box-orient: vertical; //여기까지는 줄이 길어질때 자동으로 다음줄로 넘기기 위한 코드
  cursor: text;
  text-decoration: ${props => (props.checked ? 'line-through' : 'initial')};
  color: ${props => (props.checked ? '#aaa' : '#212121')};
`;

export default function TodoItem({
  todo,
  checkTodo,
  editModeTodo,
  editTodo,
  deleteTodo,
}: {
  todo: ITodoItem;
  checkTodo: () => void;
  editModeTodo: () => void;
  editTodo: (todo: string) => void;
  deleteTodo: () => void;
}) {
  return (
    <Box isEditing={todo.editing}>
      <div style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
        <Checkbox checked={todo.completed} onClick={() => checkTodo()} />
        <Block marginLeft="10px" />
        {todo.editing ? (
          <TodoInput
            editTodo={(todo: string) => {
              editTodo(todo);
              editModeTodo();
            }}
            isEditing={true}
            editContent={todo.content}
          />
        ) : (
          <TodoContent onClick={() => editModeTodo()} checked={todo.completed}>
            {todo.content}
          </TodoContent>
        )}
      </div>
      <CircleButton
        className="delete-button"
        onClick={() => deleteTodo()}
        Icon={() => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            width="48"
            viewBox="0 0 50 50"
          >
            <path d="M13.05 42q-1.25 0-2.125-.875T10.05 39V10.5H8v-3h9.4V6h13.2v1.5H40v3h-2.05V39q0 1.2-.9 2.1-.9.9-2.1.9Zm21.9-31.5h-21.9V39h21.9Zm-16.6 24.2h3V14.75h-3Zm8.3 0h3V14.75h-3Zm-13.6-24.2V39Z" />
          </svg>
        )}
      />
    </Box>
  );
}
