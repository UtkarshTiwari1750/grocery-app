import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

interface CategoryCardProps {
  category: {
    id: number;
    name: string;
    image: string;
  };
  onPress: () => void;
}

export default function CategoryCard({ category, onPress }: CategoryCardProps) {
  return (
    <TouchableOpacity className="mb-4 w-[48%]" onPress={onPress} activeOpacity={0.7}>
      <View className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
        <Image source={{ uri: category.image }} className="h-32 w-full" resizeMode="cover" />
        <View className="p-4">
          <Text className="text-center text-base font-semibold text-gray-900">{category.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
