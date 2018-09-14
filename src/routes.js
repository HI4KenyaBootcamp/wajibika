import React from 'react'
import { createStackNavigator } from 'react-navigation';

import EuvScreen from './screens/EuvScreen'
import HomeScreen from './screens/HomeScreen'
import GenericHeader from './widgets/GenericHeader';

import Resources from './pages/Resources_references/Resource_Reference'

const Routes = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerTitle: 'Home',
        header: props => <GenericHeader {...props} />
      }
    },
    Euv: {
      screen: EuvScreen,
      navigationOptions: {
        headerTitle: 'EUV',
        header: props => <GenericHeader {...props} />
      }
    },
    Resources: {
      screen: Resources,
      navigationOptions: {
        headerTitle: 'Resources and Reference',
        header: props => <GenericHeader {...props} />
      }
    },
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerBackTitleStyle: {
        color: "black"
      },
      headerTitleStyle: {
        fontWeight: "bold",
        color: "black",
      },
      headerTintColor: "#fff"
    }
  }
)

export default Routes