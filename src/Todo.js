import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { AutoForm, TextField, AutoFields, SubmitField } from 'uniforms-patternfly';

import { schema } from './schema';
import { TodoList } from './TodoList';
import { Loading } from './Loading';
import { Feedback } from './Feedback';
import { CREATE_TODO, FIND_TODOS } from './queries';


export function Todo() {

  const { loading, error, data } = useQuery(FIND_TODOS, { fetchPolicy: 'network-only'});
  const [createTodo] = useMutation(CREATE_TODO);

  const handleSubmit = async(model) => {
    await createTodo({
      variables: {
        title: model.title,
        completed: model.completed,
      },
      refetchQueries: [{ query: FIND_TODOS }]
    });
    model.title = '';
  };

  if (loading) return <Loading />;

  if (error) return <Feedback type='error' />;

  return (
    <div style={{ width: '40%' }}>
      <AutoForm schema={schema} onSubmit={handleSubmit} >
        <TextField name="title" />
        <SubmitField />
      </AutoForm>
      <br/>
      <TodoList todos={data.findAllTodos} />
    </div>
  );
};