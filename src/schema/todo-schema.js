import Ajv from 'ajv';
import { JSONSchemaBridge } from 'uniforms-bridge-json-schema';

const ajv = new Ajv({ allErrors: true, useDefaults: true });

function createValidator(schema) {
  const validator = ajv.compile(schema);
  return model => {
    validator(model);
    if (validator.errors && validator.errors.length) {
      throw { details: validator.errors };
    }
  };
}

const schema = {
  type: 'object',
  properties: {
    title: {
      type: 'string',
      title: 'title',
      uniforms: {
        title: 'Title',
        errorMessage: 'Title is required'
      }
    },
    version: {
      type: 'number',
      title: 'version',
      uniforms: {
        title: 'Version',
        errorMessage: 'Title is required'
      }
    },
    completed: {
      type: 'boolean',
      title: 'completed',
      uniforms: {
        title: 'Completed',
      }
    },
  },
  required: [
    'title'
  ]
};

const schemaValidator = createValidator(schema);

export default new JSONSchemaBridge(schema, schemaValidator);
