import React from 'react';
import { AutoForm, SubmitField, AutoFields } from 'uniforms-patternfly';
import schema from '../schema/json-schema';

export function Fields() {
  return(
    <AutoForm 
      schema={schema}
      onSubmit={model => alert(JSON.stringify(model, null, 2))}
    >
      {/* <TextField name="name" value="Gianluca" />
      <TextField name="city" value="Waterford" />
      <BoolField name="t's & c's" appearance="switch" />
      <SubmitField /> */}
      <AutoFields omitFields={'address_two'} />
      <SubmitField />
    </AutoForm>
  );
}