import {ApolloClient, from, InMemoryCache, makeVar} from '@apollo/client';
import {setContext} from "@apollo/client/link/context";
import {onError} from "@apollo/client/link/error";
import createUploadLink from "apollo-upload-client/createUploadLink.mjs";
// import { createUploadLink } from '@types/apollo-upload-client';

const AUTH_TOKEN = "khanway_access_token";
const token = sessionStorage.getItem(AUTH_TOKEN) || localStorage.getItem(AUTH_TOKEN);
export const isLoggedInVar = makeVar(Boolean(token));
export const authTokenVar = makeVar(token);

const errorLink = onError(({graphQLErrors, networkError, operation, forward}) => {
    if (graphQLErrors) {
        graphQLErrors.forEach(({message, locations, path}) => {
            console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`);
            if (message === 'Unauthorized') {
                // error code is set to UNAUTHENTICATED
                // when AuthenticationError thrown in resolver
                try {
                    sessionStorage.removeItem(AUTH_TOKEN);
                    localStorage.removeItem(AUTH_TOKEN)
                    return forward(operation);
                } catch (e) {
                    console.log(e)
                }

                console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`);
            }
        })
    }
    if (networkError)
        console.log(`[Network error]: ${networkError}`);
});

const authLink = setContext((_, {headers}) => {
    const token = sessionStorage.getItem(AUTH_TOKEN) || localStorage.getItem(AUTH_TOKEN);

    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : ""
        }
    }
});

const uploadLink = createUploadLink({
    // uri: `${import.meta.env.VITE_APP_SERVER_URL}/graphql`,
    uri: `/graphql`,
    credentials: "include",
});

export const client = new ApolloClient({
    link: from([authLink.concat(uploadLink), errorLink]),
    credentials: "include",
    cache: new InMemoryCache({
        addTypename: false,
        typePolicies: {
            Query: {
                fields: {
                    isLoggedIn: {
                        read() {
                            return isLoggedInVar();
                        }
                    },
                    token: {
                        read() {
                            return authTokenVar();
                        }
                    }
                }
            }
        }
    }),
    defaultOptions: {
        watchQuery: {
            fetchPolicy: "no-cache",
            errorPolicy: "ignore",
        },
        query: {
            fetchPolicy: "no-cache",
            errorPolicy: "all",
        },
    }
});
