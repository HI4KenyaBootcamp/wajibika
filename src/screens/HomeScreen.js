import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Button } from 'native-base'

class HomeScreen extends Component {

  render () {
    const { navigate } = this.props.navigation
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Home!</Text>
        <Button bordered onPress={() => navigate('Euv')} >
          <Text>Get Started</Text>
        </Button>
      </View>
    )
  }
}

export default HomeScreen