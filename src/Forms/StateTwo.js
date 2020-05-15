import React from 'react';
import { 
  Form, 
  FormGroup, 
  TextInput,
  ActionGroup,
  Button
} from '@patternfly/react-core';


export function AddressForm() {
  const [ state, setState ] = React.useState({
    name: '',
    addressOne: '',
    addressTwo: '',
    city: '',
    zip: '',
    country: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify({
      name: state.name,
      addressOne: state.addressOne,
      addressTwo: state.addressTwo,
      city: state.city,
      zip: state.zip,
      country: state.country,
    }, null, 2));
  }

  const handleInput = (value, event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: value,
    });
  }

  const handleReset = (e) => {
    e.preventDefault();
    setState({
      name: '',
      addressOne: '',
      addressTwo: '',
      city: '',
      zip: '',
      country: ''
    });
  }

  return(
    <Form onSubmit={handleSubmit} onReset={handleReset}>
      <FormGroup 
        label="Name" 
        isRequired 
        fieldId="name-input"
      >
        <TextInput 
          name="name"
          isRequired 
          type="text" 
          id="name-input" 
          value={state.name} 
          onChange={handleInput}
        />
      </FormGroup>
      <FormGroup 
        label="Address Line One" 
        isRequired 
        fieldId="address-one-input"
      >
        <TextInput 
          name="addressOne"
          isRequired 
          type="text" 
          id="address-one-input" 
          value={state.addressOne} 
          onChange={handleInput}
        />
      </FormGroup>
      <FormGroup 
        label="Address Line Two" 
        isRequired 
        fieldId="address-two-input"
      >
        <TextInput 
          name="addressTwo"
          isRequired 
          type="text" 
          id="address-two-input" 
          value={state.addressTwo} 
          onChange={handleInput}
        />
      </FormGroup>
      <FormGroup 
        label="City" 
        isRequired 
        fieldId="city-input"
      >
        <TextInput 
          name="city"
          isRequired 
          type="text" 
          id="city-input" 
          value={state.city} 
          onChange={handleInput}
        />
      </FormGroup>
      <FormGroup 
        label="Zip" 
        isRequired 
        fieldId="zip-input"
      >
        <TextInput 
          name="zip"
          isRequired 
          type="text" 
          id="zip-input" 
          value={state.zip} 
          onChange={handleInput}
        />
      </FormGroup>
      <FormGroup 
        label="Country" 
        isRequired 
        fieldId="city-input"
      >
        <TextInput 
          name="country"
          isRequired 
          type="text" 
          id="country-input" 
          value={state.country} 
          onChange={handleInput}
        />
      </FormGroup>
      <ActionGroup>
        <Button variant="primary" type="submit">Submit form</Button>
        <Button variant="secondary" type="reset">Cancel</Button>
      </ActionGroup>
    </Form>
  );
}