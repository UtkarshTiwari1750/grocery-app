// Font configuration for the app
// Note: For React Native, custom fonts need to be properly installed and linked

export const fonts = {
  // Poppins font family
  poppins: {
    regular: 'Poppins-Regular',
    medium: 'Poppins-Medium',
    semiBold: 'Poppins-SemiBold',
    bold: 'Poppins-Bold',
  },
  
  // Inter font family
  inter: {
    regular: 'Inter-Regular',
    medium: 'Inter-Medium',
    semiBold: 'Inter-SemiBold',
    bold: 'Inter-Bold',
  },
};

// Font weight mapping for React Native
export const fontWeights = {
  '400': 'regular',
  '500': 'medium',
  '600': 'semiBold',
  '700': 'bold',
} as const;

// Helper function to get the correct font family based on weight
export const getFontFamily = (baseFamily: 'Poppins' | 'Inter', weight: '400' | '500' | '600' | '700') => {
  const weightName = fontWeights[weight];
  
  if (baseFamily === 'Poppins') {
    return fonts.poppins[weightName];
  } else {
    return fonts.inter[weightName];
  }
};

// Fallback to system fonts if custom fonts are not available
export const getFontFamilyWithFallback = (baseFamily: 'Poppins' | 'Inter', weight: '400' | '500' | '600' | '700') => {
  // For now, we'll use system fonts as fallback
  // In a production app, you would install and link the custom fonts
  return baseFamily;
};
