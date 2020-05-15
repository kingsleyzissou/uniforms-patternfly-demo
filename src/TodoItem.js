import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { QuickForm, BoolField } from 'uniforms-patternfly';
import { Card, CardBody, Button } from '@patternfly/react-core';

import { schema } from './schema';
import { UPDATE_TODO, DELETE_TODO, FIND_TODOS } from './queries';

export function TodoItem({ todo }) {

  // Apollo mutation hooks
  const [updateTodo] = useMutation(UPDATE_TODO);
  const [deleteTodo] = useMutation(DELETE_TODO);

  // Handle the todo completed status
  const handleToggle = async ({ id, completed }) => {
    await updateTodo({
      variables: {
        id,
        completed: !completed
      },
    });
  }

  return (
    <Card style={{ marginBottom: '0.5em' }}>
      <CardBody>
        <QuickForm schema={schema} style={{ marginBottom: '1em' }}>
          <BoolField 
            name="completed" 
            value={todo.completed} 
            appearance='switch'
            onChange={() => handleToggle(todo)}
            label={todo.title}
          />
        </QuickForm>
        <Button 
          variant="danger" 
          style={{float: 'right'}}
          onClick={() => deleteTodo({ 
            variables: { id: todo.id },
            refetchQueries: [{ query: FIND_TODOS }]
          })}
        >
          Delete
        </Button>
      </CardBody>
    </Card>
  );
}