// Mock data for the grocery app
export interface Product {
  id: number;
  name: string;
  weight: string;
  price: number;
  image: string;
  description?: string;
  category: string;
}

export interface Category {
  id: number;
  name: string;
  image: string;
}

export const categories: Category[] = [
  {
    id: 1,
    name: 'Groceries',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=300&h=200&fit=crop',
  },
  {
    id: 2,
    name: 'Vegetables',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300&h=200&fit=crop',
  },
  {
    id: 3,
    name: 'Fruits',
    image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=300&h=200&fit=crop',
  },
  {
    id: 4,
    name: 'Dairy',
    image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300&h=200&fit=crop',
  },
];

export const products: Product[] = [
  {
    id: 1,
    name: 'Oak Coffee',
    weight: '100g',
    price: 540,
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=300&h=200&fit=crop',
    description: 'Oak Coffee – A Bold Brew with Earthy Depth\nSavor the rich, full-bodied character of Oak Coffee, crafted from carefully roasted beans that deliver warm, toasty notes reminiscent of oak-aged perfection.',
    category: 'Groceries',
  },
  {
    id: 2,
    name: 'Premium Tea',
    weight: '200g',
    price: 320,
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=300&h=200&fit=crop',
    description: 'Premium blend tea with aromatic herbs and spices.',
    category: 'Groceries',
  },
  {
    id: 3,
    name: 'Organic Honey',
    weight: '500g',
    price: 450,
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=300&h=200&fit=crop',
    description: 'Pure organic honey sourced from local beekeepers.',
    category: 'Groceries',
  },
  {
    id: 4,
    name: 'Fresh Tomatoes',
    weight: '1kg',
    price: 80,
    image: 'https://images.unsplash.com/photo-1546470427-e26264be0b0d?w=300&h=200&fit=crop',
    description: 'Fresh, juicy tomatoes perfect for cooking.',
    category: 'Vegetables',
  },
  {
    id: 5,
    name: 'Green Spinach',
    weight: '500g',
    price: 40,
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=300&h=200&fit=crop',
    description: 'Fresh green spinach leaves, rich in iron.',
    category: 'Vegetables',
  },
  {
    id: 6,
    name: 'Red Apples',
    weight: '1kg',
    price: 180,
    image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=300&h=200&fit=crop',
    description: 'Crisp and sweet red apples.',
    category: 'Fruits',
  },
  {
    id: 7,
    name: 'Fresh Milk',
    weight: '1L',
    price: 60,
    image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300&h=200&fit=crop',
    description: 'Fresh dairy milk, rich in calcium.',
    category: 'Dairy',
  },
];

// API functions
export const getCategories = (): Promise<Category[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(categories), 500);
  });
};

export const getProductsByCategory = (categoryName: string): Promise<Product[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredProducts = products.filter(
        (product) => product.category.toLowerCase() === categoryName.toLowerCase()
      );
      resolve(filteredProducts);
    }, 500);
  });
};

export const getProductById = (id: number): Promise<Product | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = products.find((p) => p.id === id);
      resolve(product);
    }, 300);
  });
};
