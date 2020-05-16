import React from 'react';
import { EmptyState, Title, Spinner } from '@patternfly/react-core';

export function Loading() {
  return(
    <EmptyState>
      <Spinner />
      <Title size={'medium'}>Loading...</Title>
    </EmptyState>
  );
}
