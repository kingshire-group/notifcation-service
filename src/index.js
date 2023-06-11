import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import reportWebVitals from './reportWebVitals'
import App from './App'
import { store } from './App/store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={ store }>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
        <Router>
          <Routes>
            <Route path = '/*' element = {<App />} />
          </Routes>
        </Router>
      </GoogleOAuthProvider>
    </Provider>
  </React.StrictMode>
)

reportWebVitals()
