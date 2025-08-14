import { useNavigation } from '@react-navigation/native';
import { useContext, useEffect } from "react";
import AuthStorageContext from "../context/AuthStorageContext";
import { useApolloClient } from "@apollo/client";

const Logout = () => {

    const navigation = useNavigation();
    const authStorage = useContext(AuthStorageContext); 
    const apolloClient = useApolloClient();

    useEffect( () => {

        const doLogout = async () => {
            await authStorage.removeAccessToken();  
            await apolloClient.resetStore();

            navigation.reset({
                index: 0,
                routes: [{ name: 'Login' }],
            });     
        };

        doLogout();
    }, []);

    return null;
};

export default Logout;