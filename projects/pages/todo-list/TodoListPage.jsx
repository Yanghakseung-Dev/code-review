import React from 'react';
import TodoList from './components/TodoList';
import styled from 'styled-components';
const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`;

const TodoListPage = () => {
  return (
    <Page>
      <TodoList />
    </Page>
  );
};

export default TodoListPage;
