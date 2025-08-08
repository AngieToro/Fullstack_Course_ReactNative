import { useNavigate } from "react-router-native";
import { useContext, useEffect } from "react";
import AuthStorageContext from "../context/AuthStorageContext";
import { useApolloClient } from "@apollo/client";

const Logout = () => {

    const navigate = useNavigate();
    const authStorage = useContext(AuthStorageContext); 
    const apolloClient = useApolloClient();

    useEffect( () => {

        const doLogout = async () => {
            await authStorage.removeAccessToken();  
            await apolloClient.resetStore();
            navigate('/login', { replace: true } );     
            //el replace true, Navega a la nueva ruta, pero reemplaza la entrada actual del historial en vez de agregar una nueva.
            //Esto evita que el usuario pueda volver a la pantalla anterior usando el botón de retroceso, lo cual es más seguro en un logout.
        };

        doLogout();
    }, []);

    return null;
};

export default Logout;