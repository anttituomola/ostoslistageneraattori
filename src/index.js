import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { configureStore } from "@reduxjs/toolkit"
import { Provider } from "react-redux"
import metadataSlice from "./reducers/metadata"
import recipeSlice from './reducers/recipes'
import planSlice from './reducers/plans'

const store = configureStore({
	reducer: {
    metadata: metadataSlice,
    recipes: recipeSlice,
    plans: planSlice,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
      // Got annoying warnings from my date objects, turn them off with this:
      serializableCheck: false,
    },
  ),
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
