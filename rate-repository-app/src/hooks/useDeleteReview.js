import { useMutation } from "@apollo/client";
import { DELETE_REVIEW } from "../graphQL/mutations"; 

const useDeleteReview = ( ) => {

    const [mutate] = useMutation( DELETE_REVIEW );

    const deleteReview = async ( id ) => {

        console.log('Id review to delete: ', id);

        try {

            const response = await mutate( {
                variables: { deleteReviewId: id }
            });

            console.log('GraphQL delete review response:', response);
            
            return response;
            
        } catch (error) {
            console.error('Error deleting a review: ', error.message);  
            throw error;   
        }
    };

    return { deleteReview };
};

export default useDeleteReview;