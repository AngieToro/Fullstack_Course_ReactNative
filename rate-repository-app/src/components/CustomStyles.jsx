import { View } from 'react-native';
import TextCustom from './TextCustom';

const CustomStyles = () => {

    return (

        <View>
            <TextCustom>Simple Text</TextCustom>
            <TextCustom style={ { paddingBottom: 10 } }>Text with custom style</TextCustom>
            <TextCustom fontWeight="bold" fontSize="subheading">
              Bold subheading
            </TextCustom>
            <TextCustom color="textSecondary">Text with secondary color</TextCustom>
        </View>
    );
};

export default CustomStyles;