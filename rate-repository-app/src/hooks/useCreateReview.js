import { useMutation, useApolloClient } from "@apollo/client";
import { useContext } from "react";
import AuthStorageContext from "../context/AuthStorageContext";
import { CREATE_REVIEW } from "../graphQL/mutations"; 

const useCreateReview = () => {

    const [mutate, result] = useMutation( CREATE_REVIEW );

    const handleCreateReview = async ( {  ownerName, repositoryName, rating, text } ) => {

        try {

            const response = await mutate( {
                variables: {
                    review: { 
                        ownerName,
                        repositoryName,
                        rating: Number(rating),
                        text 
                    }
                }
            });

            console.log('GraphQL create review response:', response);
            
            return response;
            
        } catch (error) {
            console.error('Error creating a review: ', error.message);  
            throw error;   
        }
    };

    return { handleCreateReview, result };
};

export default useCreateReview;