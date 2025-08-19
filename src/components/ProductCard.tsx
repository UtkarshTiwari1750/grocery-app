import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useCart } from '../context/CartContext';
import { typography } from '../styles/typography';

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
  const { getItemQuantity } = useCart();
  const quantity = getItemQuantity(product.id);

  return (
    <TouchableOpacity className="mb-4 w-[48%]" onPress={onPress} activeOpacity={0.7}>
      <View className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
        <Image source={{ uri: product.image }} className="h-32 w-full" resizeMode="cover" />
        <View className="p-3">
          <Text style={[typography.productCardName, { marginBottom: 4 }]} numberOfLines={2}>
            {product.name}
          </Text>
          <Text style={[typography.productCardWeight, { marginBottom: 12 }]}>{product.weight}</Text>
          <View className="flex-row items-center justify-between">
            <Text style={typography.productCardPrice}>₹ {product.price}</Text>
            <TouchableOpacity
              className="rounded-lg bg-orange-500 px-4 py-2"
              onPress={onAddPress}
              activeOpacity={0.8}>
              <Text style={[typography.productCardAddButton, { color: 'white' }]}>
                {quantity > 0 ? `Add (${quantity})` : 'Add'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
