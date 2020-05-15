import React from 'react';
import { useForm } from 'react-hook-form';
import { 
  Form, 
  FormGroup, 
  TextInput,
  ActionGroup,
  Button
} from '@patternfly/react-core';

export function AddressForm() {
  const { register, handleSubmit, errors, reset } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));
  }

  return(
    <Form onSubmit={handleSubmit(onSubmit)} onReset={reset}>
      <FormGroup 
        label="Name" 
        isRequired 
        fieldId="name-input"
        isValid={errors.name && errors.name.length > 0}
        helperText={<>Please enter your name</>}
      >
        <TextInput
          name="name"
          isValid={errors.name && errors.name.length > 0}
          isRequired 
          type="text" 
          id="name-input" 
          ref={register({ required: true })}
        />
      </FormGroup>
      <FormGroup 
        label="City"
        isValid={errors.city && errors.city.length > 0}
        isRequired 
        fieldId="city-input"
        helperText={<>Please enter a city</>}
      >
        <TextInput 
          name="city"
          isRequired 
          isValid={errors.city && errors.city.length > 0}
          type="text" 
          id="city-input" 
          ref={register({ required: true })}
        />
      </FormGroup>
      <ActionGroup>
        <Button variant="primary" type="submit">Submit form</Button>
        <Button variant="secondary" type="reset">Cancel</Button>
      </ActionGroup>
    </Form>
  );
}