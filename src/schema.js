import { GraphQLBridge } from 'uniforms-bridge-graphql';
import { buildASTSchema } from 'graphql';
import { loader } from 'graphql.macro';

// import the grapqhl model
const model = loader('./model/runtime.graphql');

// empty validator (i.e. no form validation)
const validator = () => {};

export const schema = new GraphQLBridge(
  buildASTSchema((model)).getType('Todo'),
  validator,
  {}
);