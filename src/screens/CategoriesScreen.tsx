import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
  ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';
import { getCategories, Category } from '../services/api';

type NavigationProp = StackNavigationProp<RootStackParamList>;

export default function CategoriesScreen() {
  const navigation = useNavigation<NavigationProp>();
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    try {
      const data = await getCategories();
      setCategories(data);
    } catch (error) {
      console.error('Error loading categories:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryPress = (categoryName: string) => {
    navigation.navigate('ProductList', { category: categoryName });
  };

  const handleContactPress = () => {
    console.log('Contact us pressed');
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  const renderCategory = (category: Category) => (
    <TouchableOpacity
      key={category.id}
      className="mb-4 w-[48%]"
      onPress={() => handleCategoryPress(category.name)}
      activeOpacity={0.7}>
      <View className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
        <Image source={{ uri: category.image }} className="h-32 w-full" resizeMode="cover" />
        <View className="p-4">
          <Text className="text-center text-base font-semibold text-gray-900">{category.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderLoadingState = () => (
    <View className="flex-1 items-center justify-center py-20">
      <ActivityIndicator size="large" color="#F97316" />
      <Text className="mt-4 text-lg font-medium text-gray-600">Loading categories...</Text>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="flex-row items-center bg-yellow-200 px-4 py-4 shadow-sm">
        <TouchableOpacity className="mr-4" onPress={handleBackPress}>
          <Ionicons name="chevron-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text className="text-xl font-bold text-gray-800">Categories</Text>
      </View>

      {loading ? (
        renderLoadingState()
      ) : (
        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          <View className="px-4 py-6">
            {/* Categories Grid */}
            <View className="flex-row flex-wrap justify-between">
              {categories.map(renderCategory)}
            </View>

            {/* Need Help Section */}
            <View className="mt-8 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <Text className="mb-3 text-center text-xl font-bold text-gray-900">Need Help?</Text>
              <Text className="mb-6 text-center text-base leading-6 text-gray-600">
                Our support team is ready to assist you with any questions or concerns.
              </Text>
              <TouchableOpacity
                className="flex-row items-center justify-center rounded-xl border border-green-200 bg-green-100 px-6 py-4"
                onPress={handleContactPress}
                activeOpacity={0.8}>
                <Ionicons name="chatbubble-outline" size={22} color="#059669" />
                <Text className="ml-3 text-base font-semibold text-green-700">Contact Us</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}
