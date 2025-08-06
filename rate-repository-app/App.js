import { NativeRouter } from 'react-router-native';
import Main from './src/components/Main';
import { ApolloProvider } from '@apollo/client';
import createApolloClient from './src/utils/createApolloClient.js';
import Constants from 'expo-constants';

const apolloClient = createApolloClient();

const App = () => {

  const environment = Constants.expoConfig.extra.environment;
  console.log('Environment: ', environment);

  return (
    <ApolloProvider client={ apolloClient }>
      <NativeRouter>
        <Main />
      </NativeRouter>
    </ApolloProvider>
  );
};

export default App;