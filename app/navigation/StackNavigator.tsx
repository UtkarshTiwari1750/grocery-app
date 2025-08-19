import { createStackNavigator } from '@react-navigation/stack';
import BottomTabs from './BottomTabs';
import ProductListScreen from '../../src/screens/ProductListScreen';
import ProductDetailScreen from '../../src/screens/ProductDetailScreen';
import { AntDesign } from '@expo/vector-icons';
import { RootStackParamList } from '../../src/types/navigation';
import { typography } from '../../src/styles/typography';

const Stack = createStackNavigator<RootStackParamList>();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#FFF3B0',
          borderBottomEndRadius: 25,
          borderBottomStartRadius: 25,
        },
        headerBackImage: () => <AntDesign name="left" size={24} color="#333333" className="" />,
        headerTintColor: '#333333',
        headerTitleStyle: typography.navigationHeader,
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name="Main"
        component={BottomTabs}
        options={{
          title: 'Categories', // Default title, will be updated dynamically
        }}
      />
      <Stack.Screen
        name="ProductList"
        component={ProductListScreen}
        options={({ route }) => ({
          title: route.params?.category || 'Products',
        })}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={({ route }) => ({
          title: route.params?.product?.name || 'Product Detail',
        })}
      />
    </Stack.Navigator>
  );
}
