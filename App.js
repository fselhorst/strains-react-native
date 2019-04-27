import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './screens/home/HomeScreen';
import StrainScreen from './screens/strain/StrainScreen';

const MainNavigator = createStackNavigator({
    Home: {screen: HomeScreen},
    Strain: {screen: StrainScreen}
});

const App = createAppContainer(MainNavigator);

export default App;
