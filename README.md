# Grocery App - React Native

A modern grocery shopping app built with React Native, Expo, and TypeScript.

## Tech Stack

- **Framework**: React Native with Expo
- **Language**: TypeScript
- **Navigation**: React Navigation (Stack + Bottom Tabs)
- **Styling**: NativeWind (Tailwind CSS for React Native)
- **UI Components**: React Native Paper, Expo Vector Icons
- **State Management**: React Context

## Project Structure

```
grocery-app/
├── app/                     # App-level navigation
│   ├── navigation/          # Navigation setup
│   │   ├── StackNavigator.tsx
│   │   └── BottomTabs.tsx
│   └── index.tsx           # Entry point
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── ProductCard.tsx
│   │   └── CategoryCard.tsx
│   ├── screens/           # All screens
│   │   ├── CategoriesScreen.tsx
│   │   ├── ProductListScreen.tsx
│   │   ├── ProductDetailScreen.tsx
│   │   ├── OrdersScreen.tsx
│   │   └── ProfileScreen.tsx
│   ├── services/          # API and data services
│   │   └── api.ts
│   ├── types/             # TypeScript type definitions
│   │   └── navigation.ts
│   └── styles/            # Theme and styling
│       └── theme.ts
├── package.json
└── README.md
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

## Screens

### Categories Screen

- Displays product categories in a grid layout
- Navigation to product lists
- "Need Help?" section with contact support

### Product List Screen (Groceries)

- Shows products filtered by category
- Grid layout with product cards
- Add to cart functionality (Phase 2)

### Product Detail Screen

- Detailed product information
- Image, description, price
- Quantity selector
- Add to cart button (Phase 2)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is licensed under the MIT License.
