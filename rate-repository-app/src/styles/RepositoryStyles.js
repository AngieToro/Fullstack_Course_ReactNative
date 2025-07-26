import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from "./ThemeStyle";

const stylesRepo = StyleSheet.create({

    containerApp: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        flex: 1,
        padding: 20,
    },
    containerBar: {
        paddingBottom: 10,
        paddingHorizontal: 20,
        backgroundColor: '#24292e',
    },
    textBar: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },
    separator: {
        height: 10,
    },
    bold: {
        fontWeight: 'bold',
        marginBottom: 16,
    },
    item: {
        backgroundColor: '#e8f0fe',
        padding: 12,
        borderWidth: 1,
        marginBottom: 10,
        borderRadius: 4
    },
    name: {
        fontWeight: 'bold',
        color: '#2e86de'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2e86de',
        marginBottom: 16,
        marginTop:16,
        textAlign: 'center'
    },
    listContainer: {
        flex: 1,
        padding: 16
    },
    header: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 12,
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
});

export default stylesRepo;