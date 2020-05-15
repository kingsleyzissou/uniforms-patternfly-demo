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
    city: ''
  });

  const [errors, setErrors] = React.useState({});

  const validateForm = () => {
    for (let field in state) {
      validateInput(field, state[field]);
      if (errors[field] && errors[field] === true) return false;
    }
    return true;
  };

  const validateInput = (name, value) => {
    if(name === 'name') {
      if (!value || value === "" || value.length === 0 || value === 'X AE A-12') {
        let errs = {...errors, name: true};
        setErrors(errs);
      } else {
        let errs = {...errors, name: false};
        setErrors(errs);
      }
    }
    if(name === 'city') {
      if (!value || value === "" ||  value === 'Atlantis') {
        let errs = {...errors, city: true};
        setErrors(errs);
      } else {
        let errs = {...errors, city: false};
        setErrors(errs);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    alert(JSON.stringify({
      name: state.name,
      city: state.city
    }, null, 2));
  }

  const handleInput = (value, event) => {
    const name = event.target.name;
    validateInput(name, value);
    setState({
      ...state,
      [name]: value,
    });
  }

  const handleReset = (e) => {
    e.preventDefault();
    setState({
      name: '',
      city: ''
    });
  }

  return(
    <Form onSubmit={handleSubmit} onReset={handleReset}>
      <FormGroup 
        label="Name" 
        isRequired 
        fieldId="name-input"
        isValid={!errors.name}
        helperTextInvalid="Please enter a valid name"
      >
        <TextInput 
          name="name"
          isRequired 
          type="text" 
          id="name-input" 
          isValid={!errors.name}
          value={state.name} 
          onChange={handleInput}
        />
      </FormGroup>
      <FormGroup 
        label="City" 
        isRequired 
        fieldId="city-input"
        isValid={!errors.city}
        helperTextInvalid="Please enter a valid city"
      >
        <TextInput 
          name="city"
          isRequired 
          type="text" 
          id="city-input" 
          isValid={!errors.city}
          value={state.city} 
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