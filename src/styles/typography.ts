import { StyleSheet, TextStyle } from 'react-native';
import { getFontFamilyWithFallback } from './fonts';

// Common style constants
const commonStyles = {
  // Font families
  poppinsRegular: getFontFamilyWithFallback('Poppins', '400'),
  poppinsMedium: getFontFamilyWithFallback('Poppins', '500'),
  poppinsSemiBold: getFontFamilyWithFallback('Poppins', '600'),
  poppinsBold: getFontFamilyWithFallback('Poppins', '700'),
  interRegular: getFontFamilyWithFallback('Inter', '400'),
  interMedium: getFontFamilyWithFallback('Inter', '500'),
  interSemiBold: getFontFamilyWithFallback('Inter', '600'),
  interBold: getFontFamilyWithFallback('Inter', '700'),

  // Font weights
  weightRegular: '400' as const,
  weightMedium: '500' as const,
  weightSemiBold: '600' as const,
  weightBold: '700' as const,

  // Font sizes
  fontSize12: 12,
  fontSize14: 14,
  fontSize16: 16,
  fontSize18: 18,
  fontSize20: 20,
  fontSize24: 24,

  // Line heights
  lineHeight18: 18,
  lineHeight21: 21,
  lineHeight24: 24,
  lineHeight27: 27,
  lineHeight30: 30,
  lineHeight36: 36,

  // Letter spacing
  letterSpacingNone: 0,

  // Colors
  primaryText: '#333333',
  secondaryText: '#5C5C5C',

  // Text alignment
  textCenter: 'center' as const,

  // Common style combinations
  poppinsMedium18700: {
    fontFamily: getFontFamilyWithFallback('Poppins', '500'),
    fontWeight: '700' as const,
    fontSize: 18,
    lineHeight: 30,
    letterSpacing: 0,
  },

  poppinsSemiBold24: {
    fontFamily: getFontFamilyWithFallback('Poppins', '600'),
    fontWeight: '600' as const,
    fontSize: 24,
    lineHeight: 36,
    letterSpacing: 0,
  },

  poppinsMedium18: {
    fontFamily: getFontFamilyWithFallback('Poppins', '500'),
    fontWeight: '500' as const,
    fontSize: 18,
    lineHeight: 27,
    letterSpacing: 0,
  },

  interMedium14: {
    fontFamily: getFontFamilyWithFallback('Inter', '500'),
    fontWeight: '500' as const,
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0,
  },

  interBold16: {
    fontFamily: getFontFamilyWithFallback('Inter', '700'),
    fontWeight: '700' as const,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0,
  },

  interRegular16: {
    fontFamily: getFontFamilyWithFallback('Inter', '400'),
    fontWeight: '400' as const,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0,
  },

  interRegular14: {
    fontFamily: getFontFamilyWithFallback('Inter', '400'),
    fontWeight: '400' as const,
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0,
  },

  poppinsBold20: {
    fontFamily: getFontFamilyWithFallback('Poppins', '700'),
    fontWeight: '700' as const,
    fontSize: 20,
    lineHeight: 30,
    letterSpacing: 0,
  },
};

// Typography configuration based on design specifications
export const typography = StyleSheet.create({
  // Navigation Header
  navigationHeader: {
    ...commonStyles.poppinsMedium18700,
    color: commonStyles.primaryText,
  } as TextStyle,

  // Categories Screen
  categoryTitle: {
    ...commonStyles.poppinsMedium18700,
    textAlign: commonStyles.textCenter,
    color: commonStyles.primaryText,
  } as TextStyle,

  needHelpTitle: {
    ...commonStyles.poppinsSemiBold24,
    textAlign: commonStyles.textCenter,
    fontWeight: '800'
  } as TextStyle,

  needHelpDescription: {
    ...commonStyles.interMedium14,
    textAlign: commonStyles.textCenter,
    fontWeight: '600'
  } as TextStyle,

  contactUsButton: {
    ...commonStyles.poppinsMedium18,
  } as TextStyle,

  // Product Card Component
  productCardName: {
    fontFamily: commonStyles.interBold,
    fontWeight: commonStyles.weightBold,
    fontSize: commonStyles.fontSize16,
    lineHeight: commonStyles.lineHeight24,
    letterSpacing: commonStyles.letterSpacingNone,
  } as TextStyle,

  productCardWeight: {
    fontFamily: commonStyles.interRegular,
    fontWeight: commonStyles.weightRegular,
    fontSize: commonStyles.fontSize14,
    lineHeight: commonStyles.lineHeight27,
    letterSpacing: commonStyles.letterSpacingNone,
  } as TextStyle,

  productCardPrice: {
    fontFamily: commonStyles.interBold,
    fontWeight: commonStyles.weightBold,
    fontSize: commonStyles.fontSize16,
    lineHeight: commonStyles.lineHeight24,
    letterSpacing: commonStyles.letterSpacingNone,
  } as TextStyle,

  productCardAddButton: {
    ...commonStyles.interBold16,
  } as TextStyle,

  // Product Detail Screen
  productDetailName: {
    ...commonStyles.poppinsBold20,
    fontSize: 24,
  } as TextStyle,

  productDetailWeight: {
    ...commonStyles.poppinsMedium18700,
  } as TextStyle,

  productDetailPrice: {
    ...commonStyles.poppinsBold20,
  } as TextStyle,

  quantityLabel: {
    ...commonStyles.poppinsMedium18700,
  } as TextStyle,

  descriptionLabel: {
    ...commonStyles.poppinsMedium18700,
  } as TextStyle,

  productDescription: {
    ...commonStyles.interRegular16,
    color: commonStyles.secondaryText,
  } as TextStyle,

  readMoreText: {
    ...commonStyles.interBold16,
    color: commonStyles.secondaryText,
  } as TextStyle,

  // Common button styles
  primaryButton: {
    ...commonStyles.interBold16,
  } as TextStyle,

  // Common text styles
  bodyText: {
    ...commonStyles.interRegular16,
  } as TextStyle,

  captionText: {
    ...commonStyles.interRegular14,
  } as TextStyle,
});

// Helper function to merge typography with additional styles
export const mergeTypography = (
  typographyStyle: TextStyle,
  additionalStyles?: TextStyle
): TextStyle => {
  return {
    ...typographyStyle,
    ...additionalStyles,
  };
};
