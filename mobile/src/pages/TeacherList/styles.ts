import{StyleSheet} from "react-native";
const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#f0f0f7"

    },
    teacherList:{
        marginTop:-60,
        padding:16
    },

    searchForm:{
        marginBottom:24,
    }, 
    label:{
        color:'#c4d2ff',
        fontFamily:'Poppins_400Regular'
    }, 

    inputBlock:{
        width:'48%'

    },
    inputGroup:{
        flexDirection:'row',
        justifyContent:'space-between'

    },
    input:{
        height:54,
        backgroundColor:'#FFF',
        borderRadius:8,
        justifyContent:'center',
        paddingHorizontal:16,
        marginTop:4,
        marginBottom:16
    },
    submitButton:{
        backgroundColor:'#04d361',
        flexDirection:'row',
        borderRadius:8,
        justifyContent:'center',
        alignItems:'center',
        height:56
    },
    submitButtonText:{
      color:"#FFF",
      fontFamily:"Archivo_700Bold",
      fontSize:16
    }
 




})
export default styles;