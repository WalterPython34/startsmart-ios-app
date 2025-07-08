import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Capacitor imports
import { Capacitor } from '@capacitor/core'

// Initialize Capacitor when running on a native platform
if (Capacitor.isNativePlatform()) {
  // Add any native platform initialization here
  console.log('Running on native platform:', Capacitor.getPlatform())
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
