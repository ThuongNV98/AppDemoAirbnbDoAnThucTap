import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    row:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        paddingVertical: 20,
        marginHorizontal: 20,
        borderBottomWidth:1,
        borderColor: 'lightgrey'
    },
    name:{
        fontWeight: 'bold'
    },
    age:{
        color: '#8d8d8d'
    },
    containerButton:{
        flexDirection: 'row',
        alignItems: 'center'
    },  
    button:{
        borderWidth: 1,
        width: 30,
        height: 30,
        borderRadius: 15,
        borderColor: '#676767',
        justifyContent: 'center',
        alignItems: 'center'
    },
    number:{
        marginHorizontal: 20,
        fontSize: 18
    },
    textBtn:{
        fontSize: 20,
        color: '#474747'
    }
});

export default styles;