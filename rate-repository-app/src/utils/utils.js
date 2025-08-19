import { View } from 'react-native';
import stylesRepo from '../styles/RepositoryStyles';

export const handleURL = ( url ) => {

        console.log('Url: ', url);

        if ( !url ) return null;
    
        Linking
            .openURL(url)
            .catch( error => console.error('Unable to connect with GitHub', error) );
};

export const ItemSeparator = () => <View style={ stylesRepo.separator } />;