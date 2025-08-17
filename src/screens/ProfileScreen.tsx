import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

export default function ProfileScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="bg-yellow-200 px-4 py-4">
        <Text className="text-xl font-semibold text-gray-800">Profile</Text>
      </View>
      <View className="flex-1 items-center justify-center">
        <Text className="text-lg text-gray-600">Profile Screen</Text>
        <Text className="text-sm text-gray-500 mt-2">Coming soon...</Text>
      </View>
    </SafeAreaView>
  );
}
