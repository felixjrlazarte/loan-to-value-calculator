import React from "react";
import { render } from "@testing-library/react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://gateway.kotini.co/graphql",
  cache: new InMemoryCache()
});

const renderWithProviders = (
  ui
) => {
  const Wrapper = ({ children }) => {

    return (
      <ApolloProvider client={client}>
        {children}
      </ApolloProvider>
    );
  };
  
  return { ...render(ui, { wrapper: Wrapper, }) };
};

export * from "@testing-library/react";
export default renderWithProviders;