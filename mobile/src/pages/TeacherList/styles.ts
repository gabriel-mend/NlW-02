import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f0f0f7"
    },
    
    teacherList: {
        marginTop: -20,
    },

    searchForm: {
        marginBottom: 20,
    },

    label: {
        color: '#d4c2ff',
        fontFamily: "Poppins_400Regular",
    },

    input: {
        height: 56,
        backgroundColor: "#fff",
        borderRadius: 8,
        justifyContent: "center",
        paddingHorizontal: 16,
        marginTop: 4,
        marginBottom: 16
    },

    inputGroup: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    inputBlock: {
        width: "48%"
    },

    submitButton: {
        backgroundColor: "#04d361",
        height: 58,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8
    },

    submitButtonText: {
        color: "#fff",
        fontFamily: "Archivo_700Bold",
        fontSize: 16
    }
});

export default styles;