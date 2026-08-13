import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { QueryClientProvider } from '@tanstack/react-query';
import { NavigationContainer } from '@react-navigation/native';
import { queryClient } from '../src/shared/lib/queryClient';
import { Router } from '../src/shared/navigation/Router';

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Router />
        <StatusBar style="auto" />
      </NavigationContainer>
    </QueryClientProvider>
  );
}

// Optional fallback UI if something fails (placeholder)
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
