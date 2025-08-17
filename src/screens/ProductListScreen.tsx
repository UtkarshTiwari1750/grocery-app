import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Image,
  ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation';
import { getProductsByCategory, Product } from '../services/api';

type NavigationProp = StackNavigationProp<RootStackParamList>;
type RoutePropType = RouteProp<RootStackParamList, 'ProductList'>;

export default function ProductListScreen() {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<RoutePropType>();
  const { category } = route.params || { category: 'Groceries' };
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProducts();
  }, [category]);

  const loadProducts = async () => {
    try {
      setLoading(true);
      const data = await getProductsByCategory(category);
      setProducts(data);
    } catch (error) {
      console.error('Error loading products:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleProductPress = (product: Product) => {
    navigation.navigate('ProductDetail', { product });
  };

  const handleAddPress = (product: Product) => {
    console.log('Add to cart:', product);
  };

  const renderProduct = ({ item }: { item: Product }) => (
    <TouchableOpacity
      className="mb-4 w-[48%]"
      onPress={() => handleProductPress(item)}
      activeOpacity={0.7}>
      <View className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
        <Image source={{ uri: item.image }} className="h-32 w-full" resizeMode="cover" />
        <View className="p-3">
          <Text className="mb-1 text-base font-semibold text-gray-900" numberOfLines={2}>
            {item.name}
          </Text>
          <Text className="mb-3 text-sm text-gray-600">{item.weight}</Text>
          <View className="flex-row items-center justify-between">
            <Text className="text-lg font-bold text-gray-900">₹ {item.price}</Text>
            <TouchableOpacity
              className="rounded-lg bg-orange-500 px-4 py-2"
              onPress={() => handleAddPress(item)}
              activeOpacity={0.8}>
              <Text className="text-sm font-semibold text-white">Add</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
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
      <ActivityIndicator size="large" color="#F97316" />
      <Text className="mt-4 text-lg font-medium text-gray-600">Loading products...</Text>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="flex-row items-center bg-yellow-200 px-4 py-4 shadow-sm">
        <TouchableOpacity className="mr-4" onPress={handleBackPress}>
          <Ionicons name="chevron-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text className="text-xl font-bold text-gray-800">{category}</Text>
      </View>

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
