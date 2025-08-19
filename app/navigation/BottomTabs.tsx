import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, Octicons, Feather, AntDesign } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useEffect } from 'react';
import CategoriesScreen from '../../src/screens/CategoriesScreen';
import OrdersScreen from '../../src/screens/OrdersScreen';
import ProfileScreen from '../../src/screens/ProfileScreen';
import { useCart } from '../../src/context/CartContext';
import { colors } from '../../src/styles/theme';
import HomeScreen from '~/screens/HomeScreen';

const Tab = createBottomTabNavigator();

// Custom Tab Bar Component
function CustomTabBar({ state, descriptors, navigation }: any) {
  const insets = useSafeAreaInsets();
  const { state: cartState } = useCart();

  // Update header title based on current tab
  useEffect(() => {
    const currentRoute = state.routes[state.index];
    const getHeaderTitle = (tabName: string) => {
      switch (tabName) {
        case 'Home':
          return 'Home';
        case 'Categories':
          return 'Categories';
        case 'Cart':
          return 'Shopping Cart';
        case 'Orders':
          return 'My Orders';
        case 'Profile':
          return 'Profile';
        default:
          return 'Categories';
      }
    };

    // Update the parent navigator's header
    const parentNavigation = navigation.getParent();
    if (parentNavigation) {
      parentNavigation.setOptions({
        title: getHeaderTitle(currentRoute.name),
      });
    }
  }, [state.index, state.routes, navigation]);

  const getTabIcon = (routeName: string): React.ReactNode => {
    switch (routeName) {
      case 'Home':
        return <Octicons name="home" size={24} color={colors.text.primary} />;
      case 'Categories':
        return <Ionicons name="grid-outline" size={24} color={colors.text.primary} />;
      case 'Cart':
        return <Octicons name="home" size={24} color={colors.text.primary} />;
      case 'Orders':
        return <Feather name="shopping-bag" size={24} color={colors.text.primary} />;
      case 'Profile':
        return <AntDesign name="user" size={24} color={colors.text.primary} />;
      default:
        return <Octicons name="home" size={24} color={colors.text.primary} />;
    }
  };

  return (
    <View style={[styles.tabBar, { paddingBottom: insets.bottom }]}>
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel !== undefined ? options.tabBarLabel : route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const TabIcon = getTabIcon(route.name);
        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={styles.tabItem}
            activeOpacity={0.7}>
            <View
              style={[
                styles.tabContent,
                isFocused ? styles.tabContentFocused : styles.tabContentDefault,
              ]}>
              <View style={isFocused ? styles.tabFocusedBackground : null} />
              <View style={styles.iconContainer}>
                {TabIcon}
                {/* Cart Badge */}
                {route.name === 'Cart' && cartState.totalItems > 0 && (
                  <View style={styles.cartBadge}>
                    <Text style={styles.cartBadgeText}>
                      {cartState.totalItems > 99 ? '99+' : cartState.totalItems}
                    </Text>
                  </View>
                )}
              </View>
              <Text
                style={[
                  styles.tabLabel,
                  isFocused ? styles.tabLabelFocused : styles.tabLabelDefault,
                ]}>
                {label}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Categories"
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Categories" component={CategoriesScreen} />
      <Tab.Screen name="Orders" component={OrdersScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    paddingTop: 8,
    paddingHorizontal: 16,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    height: 120,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabContent: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
    paddingHorizontal: 12,
    minWidth: 60,
    minHeight: 70,
    position: 'relative',
  },
  tabFocusedBackground: {
    position: 'absolute',
    top: -5,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 16,
    backgroundColor: '#FF7F50', // orange-300
    zIndex: -1,
  },

  tabContentDefault: {
    backgroundColor: 'transparent',
  },
  tabContentFocused: {
    backgroundColor: '#FFD7C9', // orange-100
    borderRadius: 16,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  tabLabel: {
    marginTop: 4,
    fontSize: 11,
    textAlign: 'center',
  },
  tabLabelDefault: {
    color: colors.text.primary,
    fontWeight: '600',
  },
  tabLabelFocused: {
    color: colors.text.primary,
    fontWeight: '600',
  },
  cartBadge: {
    position: 'absolute',
    right: -6,
    top: -3,
    backgroundColor: '#EF4444',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartBadgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
});
