import { progressSpinner } from 'plop';
import React from 'react';
import styled from 'styled-components';
import Block from '../Block';
import Checkbox from '../Checkbox';

const Box = styled.div`
  display: flex;
  align-itmes: center;
  padding: 15px 25px;
  widht: 100%;
  font-size: 1.2em;
  border-bottom: 1px solid #eee;
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

export default function TodoItem({ todo }: { todo: ITodoItem }) {
  return (
    <Box>
      <Checkbox checked={todo.completed} />
      <Block marginLeft="10px" />
      <TodoContent checked={todo.completed}>{todo.content}.</TodoContent>
    </Box>
  );
}
