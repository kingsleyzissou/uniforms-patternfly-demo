import React from 'react';
import { AutoForm } from 'uniforms-patternfly';

import schema from './schema/json-schema';

import { AddressForm } from './Forms/Simple';
// import { Fields as AddressForm } from './Forms/UniformsFields';

function App() {
  return (
    <div style={containerStyle}>
      <AddressForm />
      {/* Full auto form commented out */}
      {/* <AutoForm /> */}
    </div>
  );
}

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  width: '100vw',
  padding: '10em 0'
}

export default App;
