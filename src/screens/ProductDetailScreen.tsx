import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation';
import { Product } from '../services/api';

type NavigationProp = StackNavigationProp<RootStackParamList>;
type RoutePropType = RouteProp<RootStackParamList, 'ProductDetail'>;

export default function ProductDetailScreen() {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<RoutePropType>();
  const { product } = route.params || {
    product: {
      id: 1,
      name: 'Oak Coffee',
      weight: '100g',
      price: 540,
      image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=300&h=200&fit=crop',
      description:
        'Oak Coffee – A Bold Brew with Earthy Depth\nSavor the rich, full-bodied character of Oak Coffee, crafted from carefully roasted beans that deliver warm, toasty notes reminiscent of oak-aged perfection.',
    },
  };

  const [quantity, setQuantity] = useState(1);

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    console.log('Add to cart:', { ...product, quantity });
  };

  const handleReadMore = () => {
    console.log('Read more pressed');
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center bg-yellow-200 px-4 py-4">
        <TouchableOpacity className="mr-4" onPress={handleBackPress}>
          <Ionicons name="chevron-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text className="text-xl font-semibold text-gray-800">{product.name}</Text>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Product Image */}
        <View className="px-4 py-6">
          <Image
            source={{ uri: product.image }}
            className="h-64 w-full rounded-2xl"
            resizeMode="cover"
          />
        </View>

        {/* Product Info */}
        <View className="px-4">
          <Text className="mb-2 text-2xl font-bold text-gray-900">{product.name}</Text>
          <Text className="mb-4 text-base text-gray-600">{product.weight}</Text>
          <Text className="mb-6 text-3xl font-bold text-gray-900">₹ {product.price}</Text>

          {/* Quantity Selector */}
          <View className="mb-8">
            <Text className="mb-4 text-lg font-semibold text-gray-900">Quantity</Text>
            <View className="flex-row items-center">
              <TouchableOpacity
                className="h-12 w-12 items-center justify-center rounded-lg bg-orange-500"
                onPress={() => handleQuantityChange(-1)}
                disabled={quantity <= 1}>
                <Ionicons name="remove" size={22} color="white" />
              </TouchableOpacity>
              <View className="mx-6 min-w-[40px]">
                <Text className="text-center text-xl font-bold text-gray-900">{quantity}</Text>
              </View>
              <TouchableOpacity
                className="h-12 w-12 items-center justify-center rounded-lg bg-orange-500"
                onPress={() => handleQuantityChange(1)}>
                <Ionicons name="add" size={22} color="white" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Description */}
          <View className="mb-8">
            <Text className="mb-4 text-lg font-semibold text-gray-900">Description</Text>
            <Text className="mb-3 leading-6 text-gray-700">{product.description}</Text>
            <TouchableOpacity onPress={handleReadMore}>
              <Text className="font-semibold text-orange-500">Read more..</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Add to Cart Button */}
      <View className="border-t border-gray-100 bg-white px-4 pb-6 pt-4">
        <TouchableOpacity
          className="items-center rounded-xl bg-orange-500 py-4 shadow-lg"
          onPress={handleAddToCart}
          activeOpacity={0.8}>
          <Text className="text-lg font-bold text-white">Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
