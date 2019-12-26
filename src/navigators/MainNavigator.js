import { createStackNavigator } from 'react-navigation-stack';
import Login from '../screens/Login';
import Home from '../screens/Home';
import CadastroUser from '../screens/CadastroUser';

const MainNavigator = createStackNavigator({
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
            alignItems:'center'
        }
    }
});

export default MainNavigator;