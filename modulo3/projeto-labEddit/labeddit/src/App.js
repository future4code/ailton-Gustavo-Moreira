import { ThemeProvider } from '@mui/material';
import React from 'react';
import Router from "./routes/Router"
import { LightTheme } from './themes';


function App() {
  return (
    <div >
      <ThemeProvider theme={LightTheme}>
      <Router />
      </ThemeProvider>
    </div>
  );
}

export default App;
