# Childly Web

[//]: # (head-end)


* [React](https://github.com/facebook/react)
* [Material-UI](https://github.com/mui-org/material-ui)
* [Styled Components](https://github.com/styled-components/styled-components)
* [GraphQL](https://github.com/graphql/graphql-js)
* [Typescript](https://github.com/microsoft/TypeScript)
* [Apollo-Client](https://github.com/apollographql/apollo-client)
* [GraphQL Code Generator](https://github.com/dotansimha/graphql-code-generator)
* [Jest](https://github.com/facebook/jest)


It's server located in [this repository](https://github.com/fyelci/childly-server).

## Running locally

Clone the project.

Install dependencies:

`yarn`

Run the codegen to generate Typescript types from GraphQL (this step requires the server to be cloned under the same repo and its folder to be with it's default name):

`yarn codegen`

Run tests to make sure everything is ok:

`yarn test`

Start the client:

`yarn start`
