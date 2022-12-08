import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Router from './router'
import theme from "./theme"
import{ThemeProvider} from "@mui/material"

ReactDOM.createRoot(document.getElementById('root')).render(
 <ThemeProvider theme={theme}>
  <Router/>
  </ThemeProvider>
)
