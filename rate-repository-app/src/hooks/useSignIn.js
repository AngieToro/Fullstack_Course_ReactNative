import { useMutation, useApolloClient } from "@apollo/client";
import { useContext } from "react";
import { AUTHENTICATE_USER } from "../graphql/mutations";
import AuthStorageContext from "../context/AuthStorageContext";

const useSignIn = () => {

    const authStorage = useContext( AuthStorageContext );       //se puede usar ya que en el App.js se tiene <AuthStorageContext.Provider value={ authStorage }>
    //console.log('authStorage in context:', authStorage);

    if ( !authStorage ){
        throw new Error('AuthStorageContext is undefined. Did you forget to wrap your app in <AuthStorageContext.Provider>?');
    }

    const client = useApolloClient();

    const [mutate, result] = useMutation( AUTHENTICATE_USER );

    const handleLogin = async ( { username, password } ) => {

        try {
            
            const response = await mutate( {
                variables: {
                    credentials: { username, password }
                }
            });

            console.log('GraphQL login response:', response);

            if ( !response || !response.data){
                console.error('Response or response.data is undefined');
                return;
            }

            const accessToken = response.data?.authenticate?.accessToken;

            if ( accessToken ){
                await authStorage.setAccessToken( accessToken );    //se guarda el token
                await client.resetStore();  //borrar cache de apollo
                return response;    
            }
            
        } catch (error) {
            console.error('Login error: ', error.message);  
            throw error;          
        }
    };

    return { handleLogin, result };
};

export default useSignIn;