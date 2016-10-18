/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { AppContainer } from '~/containers'
import * as reducers from '~/redux'

const store = createStore(
	combineReducers(reducers),
	applyMiddleware(thunk)
)

export default function ReactModoro (props) {
  return (
  	<Provider store={store}>
  		<AppContainer />
  	</Provider>
  )
}