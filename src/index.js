import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './redux/reducers/rootReducer'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

const composeEnhancers = compose(applyMiddleware(thunk))
const store = configureStore({ reducer: rootReducer, enhancers: [composeEnhancers] })

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </Provider>

)
