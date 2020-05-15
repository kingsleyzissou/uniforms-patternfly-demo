import React from 'react';

import { TodoItem } from './TodoItem';

export function TodoList({ todos }) {
  return (
    todos && todos.length > 0 && (
      todos.map((todo, index) => {
        return <TodoItem todo={todo} key={index} />;
      })
    )
  );
}