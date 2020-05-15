import { GraphQLBridge } from 'uniforms-bridge-graphql';
import { buildASTSchema, parse } from 'graphql';
import { loader } from 'graphql.macro';

// const model = loader('../model/runtime.graphql');

const model = `
  type Todo {
    id: ID!
    title: String
    description: String
    version: Int!
    completed: Boolean
  }
`;

const validator = () => {
  /* Empty object for no errors */
};

export default new GraphQLBridge(
  buildASTSchema(parse(model)).getType('Todo'),
  // model,
  validator,
  {}
);