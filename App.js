import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';

import Routes from './src/routes';
import { ThemeDefault } from './src/Themes/index'

function App() {
  return (
    <NavigationContainer>
      <ThemeProvider theme={ThemeDefault}>
        <Routes />
      </ThemeProvider>
    </NavigationContainer>
  )
}

export default App;
