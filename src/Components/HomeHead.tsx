import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native'

const HomeHead = () => {
    
        return (
            <View style={styles.container}>
                <View style={styles.input}> 
                    <TextInput 
                        style={styles.inputText}
                        placeholder='검색'
                        autoCorrect={ false }
                    />
                </View>
            </View>
        )
    };
    
const styles = StyleSheet.create({
    container: {
        marginLeft: 20,
        marginRight: 20,
    },
    input: {
        borderRadius: 10,
        backgroundColor: "#FFF",
        paddingLeft: 10,
        paddingRight: 10,
        height: 50,
        alignItems: "center",
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: "#bbb",
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    inputText: {
        flex: 1,
    },
    addBtn: {
        color: '#4169E1'
    }
});

export default HomeHead;