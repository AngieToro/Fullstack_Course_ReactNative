import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/client';
import Main from './src/components/Main';
import createApolloClient from './src/utils/apolloClient.js';
import AuthStorage from './src/utils/authStorage.js';
import AuthStorageContext from './src/context/AuthStorageContext.js';
import Constants from 'expo-constants';

const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage);

const App = () => {

  const environment = Constants.expoConfig.extra.environment;
  console.log('Environment: ', environment);

  return (
    <ApolloProvider client={ apolloClient }>
        <AuthStorageContext.Provider value={ authStorage }>
          <NativeRouter>    
            <Main />
          </NativeRouter>
        </AuthStorageContext.Provider>
    </ApolloProvider>
  );
};

export default App;