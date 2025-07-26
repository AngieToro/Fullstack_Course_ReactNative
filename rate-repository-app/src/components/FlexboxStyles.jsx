import { View, Text as NativeText } from 'react-native';
import stylesFlex from '../styles/FlexboxStyle';

const FlexboxStyles = () => {

    return (

        <View style={ stylesFlex.flexContainer }>
            <View style={ stylesFlex.flexItemA }>
                <NativeText>Flex Item A</NativeText>
            </View>
            <View style={ stylesFlex.flexItemB}>
                <NativeText>Flex Item B</NativeText>
            </View>
        </View>
    );
};

export default FlexboxStyles;