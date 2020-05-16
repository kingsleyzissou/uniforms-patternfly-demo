import React from 'react';

import { Feedback } from './Feedback';
import { TodoItem } from './TodoItem';

export function TodoList({ todos }) {
  if (todos && todos.length === 0 ) return <Feedback />;

  return (
    todos && todos.length > 0 && (
      todos.map((todo,index) => {
        return <TodoItem key={index} todo={todo} />
      })
    )
  );
}