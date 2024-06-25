import { KeyWords } from "@/constants/constants";
import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: KeyWords.MASTER_URL,
  cache: new InMemoryCache(),
});
