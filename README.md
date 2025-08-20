# DailyBasket - Grocery Shopping App

A modern grocery shopping app built with React Native, Expo, and TypeScript featuring a comprehensive product catalog, shopping cart functionality, and custom branding.

## Tech Stack

- **Framework**: React Native with Expo
- **Language**: TypeScript
- **Navigation**: React Navigation (Stack + Bottom Tabs)
- **Styling**: NativeWind (Tailwind CSS for React Native)
- **UI Components**: React Native Paper, Expo Vector Icons
- **State Management**: React Context API
- **Splash Screen**: Expo Splash Screen
- **Typography**: Custom typography system with Poppins and Inter fonts

## Project Structure

```
grocery-app/
├── app/                          # App-level navigation and entry point
│   ├── navigation/               # Navigation configuration
│   │   ├── StackNavigator.tsx    # Stack navigation setup
│   │   └── BottomTabs.tsx        # Bottom tab navigation
│   └── index.tsx                 # App entry point
├── src/
│   ├── components/               # Reusable UI components
│   │   ├── CategoryCard.tsx      # Category display card
│   │   ├── ProductCard.tsx       # Product display card
│   │   ├── LoadingSpinner.tsx    # Custom animated loading spinner
│   │   └── SplashScreen.tsx      # Custom branded splash screen
│   ├── context/                  # React Context providers
│   │   └── CartContext.tsx       # Shopping cart state management
│   ├── screens/                  # Application screens
│   │   ├── CategoriesScreen.tsx  # Main categories view
│   │   ├── ProductListScreen.tsx # Products by category
│   │   ├── ProductDetailScreen.tsx # Individual product details
│   │   ├── CartScreen.tsx        # Shopping cart view
│   │   ├── OrdersScreen.tsx      # Order history
│   │   ├── ProfileScreen.tsx     # User profile
│   │   └── HomeScreen.tsx        # Home screen (placeholder)
│   ├── services/                 # API and data services
│   │   └── api.ts               # Mock API with 46+ products
│   ├── styles/                   # Styling and typography
│   │   ├── typography.ts         # Centralized typography system
│   │   ├── fonts.ts             # Font configuration
│   │   └── theme.ts             # Color and spacing theme
│   ├── types/                    # TypeScript type definitions
│   │   └── navigation.ts         # Navigation type definitions
│   ├── hooks/                    # Custom React hooks (empty)
│   └── assets/                   # Source-level assets (empty)
├── assets/                       # Static assets
│   ├── icon.png                 # Custom app icon
│   ├── adaptive-icon.png        # Android adaptive icon
│   ├── splash.png               # Splash screen image
│   └── favicon.png              # Web favicon
├── components/                   # Legacy components (unused)
│   ├── Container.tsx
│   ├── EditScreenInfo.tsx
│   └── ScreenContent.tsx
├── App.tsx                      # Root component with splash screen logic
├── app.json                     # Expo configuration with custom icon
├── global.css                   # Global Tailwind CSS styles
├── package.json                 # Dependencies and scripts
├── tailwind.config.js           # Tailwind CSS configuration
├── metro.config.js              # Metro bundler configuration
└── tsconfig.json                # TypeScript configuration
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI
- Expo Go app on your mobile device

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd grocery-app
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Scan the QR code with Expo Go app to run on your device

### Available Scripts

- `npm start` - Start the Expo development server
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS device/simulator
- `npm run web` - Run in web browser
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Features

### 🏪 Product Catalog

- **46+ Products** across 4 categories (Groceries, Vegetables, Fruits, Dairy)
- **Detailed Descriptions** with nutritional information and cooking suggestions
- **High-Quality Images** from Unsplash for each product
- **Smart ReadMore** functionality for long descriptions

### 🛒 Shopping Cart

- **Add to Cart** functionality with quantity management
- **Cart Context** for state management across screens
- **Persistent Cart** state throughout the app
- **Quantity Controls** with increment/decrement buttons

### 🎨 Custom Branding

- **Custom App Icon** replacing React Native logo
- **Branded Splash Screen** with app name and tagline
- **Animated Loading States** with rotating custom icon
- **Consistent Typography** system with Poppins and Inter fonts

### 📱 User Interface

- **Modern Design** with NativeWind (Tailwind CSS)
- **Responsive Grid Layouts** for categories and products
- **Smooth Navigation** with React Navigation
- **Loading States** with custom animated spinners

## Screens

### 🏠 Categories Screen

- Grid layout displaying 4 product categories
- Custom loading spinner with app branding
- "Need Help?" section with contact support
- Navigation to category-specific product lists

### 📦 Product List Screen

- Products filtered by selected category
- 2-column grid layout with product cards
- Add to cart functionality with quantity controls
- Custom loading states with branded spinner

### 🔍 Product Detail Screen

- Comprehensive product information display
- High-resolution product images
- Expandable descriptions with ReadMore functionality
- Quantity selector with increment/decrement controls
- Add to cart with quantity management

### 🛒 Cart Screen

- Shopping cart items display
- Quantity management for cart items
- Total price calculation
- Remove items functionality

### 👤 Profile & Orders Screens

- User profile management (placeholder)
- Order history display (placeholder)
- Ready for future implementation

## Typography System

The app features a comprehensive typography system with:

### 📝 Font Families

- **Poppins**: Used for headings, titles, and important UI elements
- **Inter**: Used for body text, descriptions, and general content

### 🎯 Typography Features

- **Centralized Configuration**: All typography styles in `src/styles/typography.ts`
- **Common Constants**: Reusable style combinations to reduce code duplication
- **Consistent Sizing**: Standardized font sizes, line heights, and letter spacing
- **Type Safety**: Full TypeScript support for all typography styles

### 📱 Usage Examples

```tsx
// Basic usage
<Text style={typography.productCardName}>Product Name</Text>

// With additional styles
<Text style={[typography.needHelpTitle, { marginBottom: 12, color: 'red' }]}>
  Custom Title
</Text>

// Using the merge helper
<Text style={mergeTypography(typography.bodyText, { color: 'blue' })}>
  Custom Text
</Text>
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is licensed under the MIT License.
