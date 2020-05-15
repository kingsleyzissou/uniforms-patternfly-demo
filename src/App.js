import React from 'react';

import { Todo } from './Todo';

function App() {
  return (
    <div style={containerStyle}>
      <Todo />
    </div>
  );
}

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  width: '100vw',
  padding: '2em 0'
}

export default App;
