import { createStackNavigator } from 'react-navigation-stack';
import Inicio from '../screens/Inicio';
import Home from '../screens/Home';
import Login from '../screens/Login';
import CadastroUser from '../screens/CadastroUser';

const MainNavigator = createStackNavigator({
    Inicio:{
        screen:Inicio,
        headerMode: 'none'
    },
    Login:{
        screen:Login,
        headerMode: 'none'
    },
    Home:{
        screen:Home
    },
    CadastroUser:{
        screen:CadastroUser
    }
},{
    defaultNavigationOptions:{
        headerBackTitle:' ',
        headerTitleStyle:{
            fontSize:20,
            fontWeight:'bold',
        },
        headerTitleContainerStyle:{
            alignContent:'center',
            alignItems:'center',
        }
    }
});

export default MainNavigator;