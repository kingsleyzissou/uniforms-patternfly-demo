import React from 'react';

import { TodoList } from './TodoList';

export function Todo() {
  return (
    <div style={{ width: '40%' }}>
      <TodoList todos={[]} />
    </div>
  );
};