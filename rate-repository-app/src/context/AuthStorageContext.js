import React from "react";

//se usa para compartir datos globales (como el token de autenticación, configuración de idioma, tema, etc.) sin necesidad de pasarlos manualmente por props en cada componente.
const AuthStorageContext = React.createContext();

export default AuthStorageContext;