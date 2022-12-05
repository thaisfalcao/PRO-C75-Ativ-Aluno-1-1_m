import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
//importe a biblioteca createBottomTabNavigator - Desafio 1


import TransactionScreen from "../screens/Transaction";
import SearchScreen from "../screens/Search";

//Adicione createBottomTabNavigator à variável tab - Desafio 2


export default class BottomTabNavigator extends Component{
    render(){
        return(
            <NavigationContainer>
                <Tab.Navigator>
                    //Adicione o código para mover para a respectiva tela quando a guia for clicada - Desafio 3
                
                </Tab.Navigator>
            </NavigationContainer>
        )
    }
}
