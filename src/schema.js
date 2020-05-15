import { GraphQLBridge } from 'uniforms-bridge-graphql';
import { buildASTSchema, parse } from 'graphql';
import { loader } from 'graphql.macro';

const model = loader('../model/runtime.graphql');

const validator = () => {};

export const schema = new GraphQLBridge(
  buildASTSchema((model)).getType('Todo'),
  validator,
  {}
);