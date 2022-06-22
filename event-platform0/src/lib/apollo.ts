import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri:'https://api-sa-east-1.graphcms.com/v2/cl4o7hb9c0xql01z734roau1v/master',
  cache: new InMemoryCache()
})