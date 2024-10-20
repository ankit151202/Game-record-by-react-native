// App.js

import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import { UsageProvider } from './contexts/UsageContext';

export default function App() {
  return (
    <UsageProvider>
      <AppNavigator />
    </UsageProvider>
  );
}
