import React from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { AutoForm, TextField, SubmitField } from 'uniforms-patternfly';

import { schema } from './schema';
import { FIND_TODOS, CREATE_TODO } from './queries';
import { TodoList } from './TodoList';

export function Todo() {

  // Apollo query hook
  const { loading, error, data } = useQuery(FIND_TODOS, { fetchPolicy: 'network-only' });

  // Apollo mutation hook
  const [createTodo] = useMutation(CREATE_TODO);

  // Handle the todo creation
  const handleSubmit = async (model) => {
    await createTodo({
      variables: {
        title: model.title,
        completed: false
      },
      refetchQueries: [{ query: FIND_TODOS }]
    });
    // reset input after submit
    model.title = '';
  }

  if (loading) return 'Loading...';

  if (error) return 'Error!';

  return(
    <div style={{ width: '40%' }}>
      <h1>Todo MVC</h1>
      <AutoForm onSubmit={handleSubmit} schema={schema}>
        <TextField name="title" label="Enter your todo" />
        <SubmitField />
      </AutoForm>
      <br/>
      <TodoList todos={data.findAllTodos} />
    </div>
  );
};