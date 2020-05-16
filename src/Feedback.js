import React from 'react';
import { EmptyState, EmptyStateIcon, EmptyStateBody, Title } from '@patternfly/react-core';
import { CubesIcon, WarningTriangleIcon } from '@patternfly/react-icons';

export function Feedback({ type }) {
  const state = type === 'empty' 
    ? { icon: CubesIcon, title: 'You have no todos', message: 'Add a todo in the form above to get started.' }
    : { icon: WarningTriangleIcon, title: 'Oops!', message: 'Something went wrong' }

  return(
    <EmptyState>
      <EmptyStateIcon icon={state.icon} />
      <Title size={'medium'}>{state.title}</Title>
      <EmptyStateBody>{state.message}</EmptyStateBody>
    </EmptyState>
  );
}

Feedback.defaultProps = {
  type: 'empty'
}