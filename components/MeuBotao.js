import React, { Component } from 'react'
import { View, TouchableHighlight, Image, Text } from 'react-native'

export default class MeuBotao extends Component {
	render() {
		return (
			<TouchableHighlight onPress={this.props.onPress}>
				<View style={{ flexDirection: 'row' }}>
					<View>
						<Image source={this.props.source} style={{ width: 50, height: 50 }} />
						<Text>{this.props.text}</Text>
					</View>
				</View>
			</TouchableHighlight>
		)
	}
}
