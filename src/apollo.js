import { HttpLink } from 'apollo-link-http';
import {ApolloClient } from 'apollo-client';
import {InMemoryCache} from "apollo-cache-inmemory";

const makeApolloClient = () => {
  const link = new HttpLink({
    uri: `https://stirred-filly-33.hasura.app/v1/graphql`,
    // headers: {
    //   Authorization: `Bearer ${token}`
    // }
  });

  const cache = new InMemoryCache();

  const client = new ApolloClient({
    link,
    cache
  });

  return client;
}

export default makeApolloClient;