import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import StackNavigator from './app/navigation/StackNavigator';
import { CartProvider } from './src/context/CartContext';

import './global.css';

export default function App() {
  return (
    <>
      <CartProvider>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </CartProvider>
      <StatusBar style="auto" />
    </>
  );
}
