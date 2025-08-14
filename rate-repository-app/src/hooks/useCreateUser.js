import { useMutation, useApolloClient } from "@apollo/client";
import { useContext } from "react";
import AuthStorageContext from "../context/AuthStorageContext";
import { CREATE_USER } from "../graphQL/mutations";

const useCreateUser = () => {

    const [mutate, result] = useMutation( CREATE_USER );

    const handleCreateUser = async ( {  username, password } ) => {

        try {

            const response = await mutate( {
                variables: {
                    user: { 
                        username,
                        password
                    }
                }
            });

            console.log('GraphQL create user response:', response);
            
            return response;
            
        } catch (error) {
            console.error('Error creating an user: ', error.message);  
            throw error;   
        }
    };

    return { handleCreateUser, result };
};

export default useCreateUser;