import React, { Component } from 'react'
import { Item, Picker } from 'react-native'

class GenericPicker extends Component {
  constructor(props) {
    super (props)
    this.state = {
      answer: this.props.options[0]
    }
  }

  render () {
    return (
      <Item dropdown>
        <Picker
          selectedValue={this.state.answer}
          style={{ height: 50, width: 50 }}
          onValueChange={(value, index) => this.setState({answer: value})}>
          
          {
            this.props.options.map( (option, index) => {
              return <Picker.Item label={option} value={index} />
            } )
          }
        </Picker>
      </Item>
    )
  }
}

export default GenericPicker