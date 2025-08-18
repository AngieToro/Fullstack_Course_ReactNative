import { StyleSheet, Platform } from 'react-native';
import Constants from 'expo-constants';
import theme from "./ThemeStyle";

const fontFamily = Platform.select({
    android:'Roboto',
    ios: 'Arial',
    default: 'System'
});
   
const stylesRepo = StyleSheet.create({

    containerApp: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    contentContainer: {
        flex: 1
    },
    repositoriesContainer: {
        flex: 1
    },
    reviewsContainer: {
        padding: 12,
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
    },
    containerBar: {
        paddingTop: Constants.statusBarHeight,
        paddingBottom: 10,
        paddingHorizontal: 20,
        backgroundColor: '#2e86de',
    },
    formContainer: {
        padding: 20,
        backgroundColor: '#fff',
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
    itemDetail: {
        backgroundColor: '#e8f0fe',
        padding: 12,
        borderWidth: 1,
        marginBottom: 10,
        borderRadius: 4,
        borderColor: '#2e86de',
        alignSelf: 'center',
        width: '90%',
        maxWidth: 400,
        marginTop: 20
    },
    reviewDetail: {
        marginBottom: 12,
        padding: 8,
        borderWidth: 1,
        borderRadius: 6,
        borderColor: '#2e86de',
        alignSelf: 'center',
        width: '90%',
        maxWidth: 400,
        backgroundColor: '#fff',
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
        textAlign: 'center',
        fontFamily: fontFamily,  
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
    textInput: {
        borderWidth: 1,
        borderColor: '#2e86de',
        borderRadius: 4,
        padding: 10,
        marginBottom: 10,
        fontFamily: fontFamily,  
    },
    inputField: {
        marginBottom: 16,
        padding: 12,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    buttonLogin: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 6,
        backgroundColor: '#2e86de',
        marginVertical: 10,
        alignSelf: 'center'
    },
    buttonText: {
        color: '#ffffffff',
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: fontFamily, 
    },
    button: {
        backgroundColor: '#0366d6',
        padding: 14,
        borderRadius: 6,
        alignItems: 'center',
        marginTop: 20,
    },
    ratingStyle: {
        width: 50,
        height: 50,
        borderRadius: 25, // Hace el círculo
        backgroundColor: '#2e86de', 
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    ratingText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    errorBorder: {
        borderColor: '#d73a4a'
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
    erroText: {
        marginTop: 5,
        color: '#ff0000ff'
    },
    inputIOS: {
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 10,
      color: 'black',
      paddingRight: 30,
      marginBottom: 12
    },
    placeholder: {
      color: 'gray',
      fontWeight: 'bold',
      fontSize: 16,
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
    },
});

export default stylesRepo;