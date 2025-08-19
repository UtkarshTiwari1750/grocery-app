import { useState, useEffect, useCallback } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';
import { getProductsByCategory, Product } from '../services/api';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import LoadingSpinner from '../components/LoadingSpinner';

type NavigationProp = StackNavigationProp<RootStackParamList>;
type RoutePropType = RouteProp<RootStackParamList, 'ProductList'>;

export default function ProductListScreen() {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<RoutePropType>();
  const { category } = route.params || { category: 'Groceries' };
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { addItem, getItemQuantity } = useCart();

  const loadProducts = useCallback(async () => {
    try {
      setLoading(true);
      const data = await getProductsByCategory(category);
      setProducts(data);
    } catch (error) {
      console.error('Error loading products:', error);
    } finally {
      setLoading(false);
    }
  }, [category]);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleProductPress = (product: Product) => {
    navigation.navigate('ProductDetail', { product });
  };

  const handleAddPress = (product: Product) => {
    addItem(product);
    console.log('Added to cart:', product.name);
  };

  const renderProduct = ({ item }: { item: Product }) => (
    <ProductCard
      product={item}
      onPress={() => handleProductPress(item)}
      onAddPress={() => handleAddPress(item)}
    />
  );

  const renderEmptyState = () => (
    <View className="flex-1 items-center justify-center py-20">
      <Ionicons name="basket-outline" size={64} color="#9CA3AF" />
      <Text className="mt-4 text-lg font-medium text-gray-600">No products found</Text>
      <Text className="mt-2 text-center text-sm text-gray-500">
        Try checking back later or explore other categories
      </Text>
    </View>
  );

  const renderLoadingState = () => (
    <View className="flex-1 items-center justify-center py-20">
      <LoadingSpinner message="Loading products..." size="large" />
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Products Grid */}
      {loading ? (
        renderLoadingState()
      ) : (
        <FlatList
          data={products}
          renderItem={renderProduct}
          numColumns={2}
          contentContainerStyle={{
            padding: 16,
            flexGrow: 1,
          }}
          columnWrapperStyle={{
            justifyContent: 'space-between',
          }}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={renderEmptyState}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </SafeAreaView>
  );
}
