import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    weight: string;
    price: number;
    image: string;
  };
  onPress: () => void;
  onAddPress: () => void;
}

export default function ProductCard({ product, onPress, onAddPress }: ProductCardProps) {
  return (
    <TouchableOpacity className="mb-4 w-[48%]" onPress={onPress} activeOpacity={0.7}>
      <View className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
        <Image source={{ uri: product.image }} className="h-32 w-full" resizeMode="cover" />
        <View className="p-3">
          <Text className="mb-1 text-base font-semibold text-gray-900" numberOfLines={2}>
            {product.name}
          </Text>
          <Text className="mb-3 text-sm text-gray-600">{product.weight}</Text>
          <View className="flex-row items-center justify-between">
            <Text className="text-lg font-bold text-gray-900">₹ {product.price}</Text>
            <TouchableOpacity
              className="rounded-lg bg-orange-500 px-4 py-2"
              onPress={onAddPress}
              activeOpacity={0.8}>
              <Text className="text-sm font-semibold text-white">Add</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
