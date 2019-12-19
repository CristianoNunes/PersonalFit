import { createStackNavigator } from 'react-navigation-stack';
import Login from '../screens/Login';
import Home from '../screens/Home';

const MainNavigator = createStackNavigator({
    Login:{
        screen:Login
    },
    Home:{
        screen:Home
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