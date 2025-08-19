import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';
import { getCategories, Category } from '../services/api';
import { typography } from '../styles/typography';

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

  const renderCategory = (category: Category) => (
    <TouchableOpacity
      key={category.id}
      className="mb-4 w-[48%]"
      onPress={() => handleCategoryPress(category.name)}
      activeOpacity={0.7}>
      <View className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
        <Image source={{ uri: category.image }} className="h-32 w-full" resizeMode="cover" />
        <View className="p-4">
          <Text style={typography.categoryTitle}>{category.name}</Text>
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
    <SafeAreaView
      className="flex-1 bg-gray-50"
      edges={['left', 'right', 'top']}
      style={{ paddingHorizontal: 8 }}>
      {loading ? (
        renderLoadingState()
      ) : (
        <ScrollView
          className="flex-1"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingVertical: 20 }}>
          <View className="px-4">
            {/* Categories Grid */}
            <View className="flex-row flex-wrap justify-between">
              {categories.map(renderCategory)}
            </View>

            {/* Need Help Section */}
            <View className="mt-8 rounded-2xl border-[0.5px] border-[#C0C0C0] bg-[#F0F0F0] p-6 shadow-sm">
              <Text style={[typography.needHelpTitle, { marginBottom: 12 }]}>Need Help?</Text>
              <Text style={[typography.needHelpDescription, { marginBottom: 24 }]}>
                Our support team is ready to assist you with any questions or concerns.
              </Text>
              <TouchableOpacity
                className="flex-row items-center justify-center rounded-xl  bg-[#CDEBD7] px-6 py-4"
                onPress={handleContactPress}
                activeOpacity={0.8}>
                <Ionicons name="chatbubble-outline" size={22} color="#333333" />
                <Text style={[typography.contactUsButton, { marginLeft: 12, color: '#333333' }]}>
                  Contact Us
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}
