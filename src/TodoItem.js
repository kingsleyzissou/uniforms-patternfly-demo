import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { QuickForm, BoolField } from 'uniforms-patternfly';
import { Card, CardBody, Button } from '@patternfly/react-core';

import { schema } from './schema';
import { UPDATE_TODO, DELETE_TODO, FIND_TODOS } from './queries';

export function TodoItem({ todo }) {

  const [updateTodo] = useMutation(UPDATE_TODO);
  const [deleteTodo] = useMutation(DELETE_TODO);

  const handleToggle = () => {
    updateTodo({
      variables: {
        id: todo.id,
        completed: !todo.completed,
      },
    });
  };

  return (
    <Card style={{ marginBottom: '0.5em' }}>
      <CardBody>
        <QuickForm schema={schema} >
          <BoolField
            label={todo.title}
            value={todo.completed}
            name="completed"
            appearance="switch"
            onChange={handleToggle}
          />
        </QuickForm>
        <Button 
          variant="danger"
          style={{ float: 'right', marginTop: '0.5em' }}
          onClick={() => {
            deleteTodo({
              variables: { id: todo.id },
              refetchQueries: [{ query: FIND_TODOS }],
            })
          }}
        >
          Delete
        </Button>
      </CardBody>
    </Card>
  );
}