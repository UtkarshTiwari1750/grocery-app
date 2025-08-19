import { View, Image, Text, StyleSheet, Animated } from 'react-native';
import { useEffect, useRef } from 'react';

interface LoadingSpinnerProps {
  message?: string;
  size?: 'small' | 'large';
}

export default function LoadingSpinner({
  message = 'Loading...',
  size = 'large',
}: LoadingSpinnerProps) {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const startRotation = () => {
      Animated.loop(
        Animated.timing(rotateAnim, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        })
      ).start();
    };

    startRotation();
  }, [rotateAnim]);

  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const logoSize = size === 'large' ? 60 : 40;
  const fontSize = size === 'large' ? 16 : 14;

  return (
    <View style={styles.container}>
      <Animated.View style={[{ transform: [{ rotate }] }]}>
        <Image
          source={require('../../assets/icon.png')}
          style={[styles.logo, { width: logoSize, height: logoSize }]}
          resizeMode="contain"
        />
      </Animated.View>
      <Text style={[styles.message, { fontSize }]}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    marginBottom: 16,
  },
  message: {
    color: '#666666',
    fontWeight: '500',
    textAlign: 'center',
  },
});
