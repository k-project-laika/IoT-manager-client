import 'react-native-gesture-handler';
import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../Screen/HomeScreen';
import SecondScreen from '../Screen/SecondScreen';
import SettingScreen from '../Screen/SettingScreen';
import SomethingScreen from '../Screen/SomethingScreen';
import { color } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from "prop-types";


const MainBottom = createMaterialBottomTabNavigator();

const MainBottomTab = () => {
    
    return(
        <NavigationContainer>

        <MainBottom.Navigator initialRouteName='First'
        /*
        screenOptions={({route})=> ({
            tabBarIcon: props => {
                let name = '';
                if (route.name === 'First') name = 'e';
                else if (route.name === 'Second') name = 'video';
                else if (route.name === 'Third') name= ''; 
                return TabIcon({...props, name});
        },
        })}
        */
        >
            <MainBottom.Screen
            name="First"
            component={HomeScreen}
            options={{
                tabBarLabel: '홈'
            }}     
            />
            <MainBottom.Screen
            name="Second"
            component={SecondScreen}
            options={{
                tabBarLabel: '홈'
            }} 
            />
            <MainBottom.Screen
            name="Third"
            component={SettingScreen}
            options={{
                tabBarLabel: '홈'
            }} 
            />
            <MainBottom.Screen
            name="Fourth"
            component={SomethingScreen}
            options={{
                tabBarLabel: '홈'
            }} 
            />
        </MainBottom.Navigator>
    </NavigationContainer>
    );
}       

export default MainBottomTab;