import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from "./ThemeStyle";

const stylesRepo = StyleSheet.create({

    containerApp: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    contentContainer: {
        flex: 1,
        
    },
    containerBar: {
        paddingTop: Constants.statusBarHeight,
        paddingBottom: 10,
        paddingHorizontal: 20,
        backgroundColor: '#2e86de',
    },
    textBar: {
        color: '#ffffffff',
        fontWeight: 'bold',
        fontSize: 16
    },
    bar:{
        paddingVertical: 12,
        paddingHorizontal: 16,
        marginRight: 12
    },
    separator: {
        height: 10,
    },
    bold: {
        fontWeight: 'bold',
        marginBottom: 16,
    },
    listContainer: {
        flex: 1,
        padding: 16
    },
    item: {
        backgroundColor: '#e8f0fe',
        padding: 12,
        borderWidth: 1,
        marginBottom: 10,
        borderRadius: 4,
        borderColor: '#2e86de'
    },
    name: {
        fontWeight: 'bold',
        color: '#2e86de'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#2e86de',
        marginBottom: 10,
        marginTop:10,
        textAlign: 'center'
    },
    header: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 12,
    },
    highlight: {
        borderWidth: 1,
        borderColor: '#2e86de',
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#2e86de',
        marginVertical: 10,
        color: '#ffffffff',
        alignSelf: 'flex-start'
    },
    raking: { 
        flexDirection: "column", 
        alignItems: "center", 
        marginHorizontal: 8 
    },
    text: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSizes.body,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal,
    },
    colorTextSecondary: {
        color: theme.colors.textSecondary,
    },
    colorPrimary: {
        color: theme.colors.primary,
    },
    fontSizeSubheading: {
        fontSize: theme.fontSizes.subheading,
    },
    fontWeightBold: {
        fontWeight: theme.fontWeights.bold,
    },
    logo: {
        width: 50, 
        height: 50, 
        borderRadius: 25
    }
});

export default stylesRepo;