import React from 'react';
import { AutoForm, TextField, BoolField, SubmitField } from 'uniforms-patternfly';

import schema from '../schema/json-schema';

export function AddressForm() {
  return(
    <AutoForm
        schema={schema}
        onSubmit={(model) => {
            alert(JSON.stringify(model, null, 2))
        }}
    >
      <TextField name="name" />
      <TextField name="address_one" />
      <BoolField name="terms" />
      <SubmitField />
    </AutoForm>
  );
}