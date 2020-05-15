import gql from 'graphql-tag';

export const FIND_TODOS = gql`
  query {
    findAllTodos {
      id
      title
      completed
    }
  }
`;

export const CREATE_TODO = gql`
  mutation createTodo($title: String!, $completed: Boolean) {
    createTodo(input: {title: $title, completed: $completed}) {
      id
      title
      completed
    }
  }
`;

export const UPDATE_TODO = gql`
  mutation updateTodo($id: ID!, $title: String!, $completed: Boolean) {
    updateTodo(input: {id: $id, title: $title, completed: $completed}) {
      id
      title
      completed
    }
  }
`;

export const DELETE_TODO = gql`
  mutation deleteTodo($id: ID!) {
    deleteTodo(input: {id: $id}) {
      id
    }
  }
`;