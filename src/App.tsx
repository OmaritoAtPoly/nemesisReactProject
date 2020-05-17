import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Router } from './route';
import { Theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={Theme} >
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
