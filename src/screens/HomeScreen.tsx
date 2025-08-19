import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white" edges={['left', 'right', 'top']}>
      <View className="flex-1 items-center justify-center">
        <Text className="text-lg text-gray-600">Home Screen</Text>
        <Text className="mt-2 text-sm text-gray-500">Coming soon...</Text>
      </View>
    </SafeAreaView>
  );
}
