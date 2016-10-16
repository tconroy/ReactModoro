import React, { PropTypes, Component } from 'react'
import { View, StyleSheet, Image, Animated } from 'react-native'
import { colors } from '~/styles'

export default class PreSplash extends Component {
  static propTypes = {}
  state = {
  	rotation: new Animated.Value(0)
  }
  componentDidMount() {
  	this.interval = setInterval(() => {
  		Animated.sequence([
				Animated.timing(this.state.rotation, { toValue: -1, duration: 150 }),
				Animated.timing(this.state.rotation, { toValue: 1, duration: 150 }),
				Animated.timing(this.state.rotation, { toValue: 0, duration: 250 }),
			]).start()
  	}, 1000)
  }
  componentWillUnmount() {
  	window.clearInterval(this.interval)
  }
  render() {
    return (
      <View style={styles.container}>
      	<Animated.Image
      		style={[styles.image, this.getTransform()]}
      		source={require('../../images/logo.png')} />
      </View>
    )
  }
  getTransform() {
  	return {
  		transform: [{
  			rotate: this.state.rotation.interpolate({
  				inputRange: [-1, 1],
  				outputRange: ['-15deg', '15deg']
  			})
  		}]
  	}
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.white,
		alignItems: 'center',
		justifyContent: 'center',
	},
	image: {
		resizeMode: 'contain',
		height: 300
	}
})