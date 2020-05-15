import React from 'react';
import { 
  Form, 
  FormGroup, 
  TextInput,
  ActionGroup,
  Button
} from '@patternfly/react-core';

export function AddressForm() {
  const name = React.useRef();
  const city = React.useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify({
      name: name.current.value, 
      city: city.current.value, 
    }, null, 2));
  }

  const handleReset = (e) => {
    e.preventDefault();
    name.current.value = '';
    city.current.value = ''; 
  }

  return(
    <Form onSubmit={handleSubmit} onReset={handleReset}>
      <FormGroup 
        label="Name" 
        isRequired 
        fieldId="name-input"
        helperText="Please enter your name"
      >
        <TextInput 
          isRequired 
          type="text" 
          id="name-input" 
          ref={name}
        />
      </FormGroup>
      <FormGroup 
        label="City" 
        isRequired 
        fieldId="city-input"
        helperText="Please enter your city"
      >
        <TextInput 
          isRequired 
          type="text" 
          id="city-input" 
          ref={city}
        />
      </FormGroup>
      <ActionGroup>
        <Button variant="primary" type="submit">Submit form</Button>
        <Button variant="secondary" type="reset">Cancel</Button>
      </ActionGroup>
    </Form>
  );
}