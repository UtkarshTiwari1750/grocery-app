import { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useCart, CartItem } from '../context/CartContext';

export default function CartScreen() {
  const { state, removeItem, updateQuantity, clearCart } = useCart();
  const [isLoading, setIsLoading] = useState(false);

  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      handleRemoveItem(id);
    } else {
      updateQuantity(id, newQuantity);
    }
  };

  const handleRemoveItem = (id: number) => {
    Alert.alert('Remove Item', 'Are you sure you want to remove this item from your cart?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Remove', style: 'destructive', onPress: () => removeItem(id) },
    ]);
  };

  const handleClearCart = () => {
    Alert.alert('Clear Cart', 'Are you sure you want to remove all items from your cart?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Clear', style: 'destructive', onPress: clearCart },
    ]);
  };

  const handleCheckout = () => {
    setIsLoading(true);
    // Simulate checkout process
    setTimeout(() => {
      setIsLoading(false);
      Alert.alert(
        'Order Placed!',
        'Your order has been placed successfully. You will receive a confirmation email shortly.',
        [{ text: 'OK', onPress: clearCart }]
      );
    }, 2000);
  };

  const renderCartItem = ({ item }: { item: CartItem }) => (
    <View className="mb-4 flex-row rounded-lg bg-white p-4 shadow-sm">
      <Image source={{ uri: item.image }} className="h-20 w-20 rounded-lg" resizeMode="cover" />
      <View className="ml-4 flex-1">
        <Text className="text-base font-semibold text-gray-900">{item.name}</Text>
        <Text className="text-sm text-gray-600">{item.weight}</Text>
        <Text className="mt-1 text-lg font-bold text-gray-900">₹ {item.price}</Text>
      </View>
      <View className="items-end justify-between">
        <TouchableOpacity onPress={() => handleRemoveItem(item.id)}>
          <Ionicons name="trash-outline" size={20} color="#EF4444" />
        </TouchableOpacity>
        <View className="flex-row items-center">
          <TouchableOpacity
            className="h-8 w-8 items-center justify-center rounded-full bg-gray-200"
            onPress={() => handleQuantityChange(item.id, item.quantity - 1)}>
            <Ionicons name="remove" size={16} color="#374151" />
          </TouchableOpacity>
          <Text className="mx-3 text-base font-semibold text-gray-900">{item.quantity}</Text>
          <TouchableOpacity
            className="h-8 w-8 items-center justify-center rounded-full bg-orange-500"
            onPress={() => handleQuantityChange(item.id, item.quantity + 1)}>
            <Ionicons name="add" size={16} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  const renderEmptyCart = () => (
    <View className="flex-1 items-center justify-center py-20">
      <Ionicons name="cart-outline" size={80} color="#9CA3AF" />
      <Text className="mt-4 text-xl font-semibold text-gray-600">Your cart is empty</Text>
      <Text className="mt-2 text-center text-gray-500">
        Add some items to your cart to see them here
      </Text>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-50" edges={['left', 'right', 'top']}>
      {/* Header */}
      <View className="flex-row items-center justify-between bg-yellow-200 px-4 py-4 shadow-sm">
        <Text className="text-xl font-bold text-gray-800">Cart</Text>
        {state.items.length > 0 && (
          <TouchableOpacity onPress={handleClearCart}>
            <Text className="font-medium text-red-600">Clear All</Text>
          </TouchableOpacity>
        )}
      </View>

      {state.items.length === 0 ? (
        renderEmptyCart()
      ) : (
        <>
          {/* Cart Items */}
          <FlatList
            data={state.items}
            renderItem={renderCartItem}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{
              padding: 16,
              paddingBottom: 200,
            }}
            showsVerticalScrollIndicator={false}
          />

          {/* Cart Summary */}
          <View className="absolute bottom-0 left-0 right-0 bg-white p-4 shadow-lg">
            <View className="mb-4 flex-row justify-between">
              <Text className="text-lg font-semibold text-gray-800">Total Items:</Text>
              <Text className="text-lg font-semibold text-gray-800">{state.totalItems}</Text>
            </View>
            <View className="mb-4 flex-row justify-between">
              <Text className="text-xl font-bold text-gray-900">Total:</Text>
              <Text className="text-xl font-bold text-orange-600">₹ {state.totalPrice}</Text>
            </View>
            <TouchableOpacity
              className={`rounded-lg py-4 ${
                isLoading ? 'bg-gray-400' : 'bg-orange-500'
              } items-center`}
              onPress={handleCheckout}
              disabled={isLoading}>
              <Text className="text-lg font-semibold text-white">
                {isLoading ? 'Processing...' : 'Checkout'}
              </Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </SafeAreaView>
  );
}
