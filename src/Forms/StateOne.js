import React from 'react';
import { 
  Form, 
  FormGroup, 
  TextInput,
  ActionGroup,
  Button
} from '@patternfly/react-core';

export function AddressForm() {
  const [ name, setName ] = React.useState('');
  const [ country, setCountry] = React.useState('');

  const handleNameInput = (value) => {
    setName(value);
  }

  const handleCountryInput = (value) => {
    setCountry(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify({
      name, country
    }, null, 2));
  }

  const handleReset = (e) => {
    e.preventDefault();
    setName('');
    setCountry('');
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
          value={name} 
          onChange={handleNameInput}
        />
      </FormGroup>
      <FormGroup 
        label="Country" 
        isRequired 
        fieldId="country-input"
        helperText="Please enter your country"
      >
        <TextInput 
          isRequired 
          type="text" 
          id="country-input" 
          value={country} 
          onChange={handleCountryInput}
        />
      </FormGroup>
      <ActionGroup>
        <Button variant="primary" type="submit">Submit form</Button>
        <Button variant="secondary" type="reset">Cancel</Button>
      </ActionGroup>
    </Form>
  );
}