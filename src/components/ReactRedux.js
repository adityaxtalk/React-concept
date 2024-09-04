import React from 'react'
import { Provider } from 'react-redux'
import store from './store/index'
import ReduxExample from './ReduxExample'

const ReactRedux = () => {
  return (
    <>
      <div>React redux example</div>
      <Provider store={store}>
        <ReduxExample/>
      </Provider>
    </>
    
  )
}

export default ReactRedux