import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage{

    constructor ( namespace = 'auth'){
        this.namespace = namespace;
    }

    async getAccessToken(){

        try {
            
            const response = await AsyncStorage.getItem(`${this.namespace}:token`);
            
            return response ? JSON.parse(response) : null;

        } catch (error) {
            console.error('Error getAccessToken: ', error);
            return null;
        }
    }

    async setAccessToken( accessToken ){

        try {

            const response = JSON.stringify( accessToken );

            await AsyncStorage.setItem(`${this.namespace}:token`, response,);

        } catch (error) {
            console.error('Error setAccessToken: ', error);
        }
    }

    async removeAccessToken(){

        await AsyncStorage.removeItem(`${this.namespace}:token`);
    }

    async isLoggedIn() {

        const token = await this.getAccessToken();
        return !!token; // hay un token válido, es lo mismo a token
    }
};

export default AuthStorage;