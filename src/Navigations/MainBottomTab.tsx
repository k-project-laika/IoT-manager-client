import 'react-native-gesture-handler';
import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import HomeScreen from '../Screen/HomeScreen';
import SecondScreen from '../Screen/SecondScreen';
import SensorScreen from '../Screen/SensorScreen';
import SomethingScreen from '../Screen/SomethingScreen';

import Icon from 'react-native-vector-icons/Ionicons';

const MainBottom = createMaterialBottomTabNavigator();

export const MainBottomTab = () => {
    
    return(
        <MainBottom.Navigator initialRouteName='First'
        
        >
            <MainBottom.Screen
            name="First"
            component={HomeScreen}
            options={{
                tabBarLabel: '홈',
                tabBarIcon: ({color}) => <Icon name="home" color={color} size={26} />
            }}     
            />
            <MainBottom.Screen
            name="Second"
            component={SecondScreen}
            options={{
                tabBarLabel: '레시피',
                tabBarIcon: ({color}) => <Icon name="people" color={color} size={26} />
            }} 
            />
            <MainBottom.Screen
            name="Third"
            component={SensorScreen}
            options={{
                tabBarLabel: '센서',
                tabBarIcon: ({color}) => <Icon name="git-branch-outline" color={color} size={26} />
            }} 
            />
            <MainBottom.Screen
            name="Fourth"
            component={SomethingScreen}
            options={{
                tabBarLabel: '관리',
                tabBarIcon: ({color}) => <Icon name="menu-outline" color={color} size={26} />
            }} 
            />
        </MainBottom.Navigator>
    
    );
}       

export default MainBottomTab;