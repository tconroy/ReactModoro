import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { Text, View } from 'react-native'
import { ReactModoroNavigator } from '~/containers'
import { PreSplash } from '~/components'

class AppContainer extends Component {
  static propTypes = {
  	isAuthenticating: PropTypes.bool.isRequired,
  }
  render() {
    return (
			<View style={{ flex: 1 }}>
				{this.props.isAuthenticating === true
					? <PreSplash />
					: <ReactModoroNavigator />
				}
			</View>
    );
  }
}

function mapStateToProps({ authentication }) {
  const { isAuthenticating } = authentication
  return {
    isAuthenticating,
  }
}

export default connect(mapStateToProps)(AppContainer)