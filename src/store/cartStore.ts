import { create } from 'zustand';

type ProductType = {
  id: string;
  name: string;
  price: number;
  // Añade aquí otros campos que tenga tu producto
};

type CartItem = ProductType & {
  quantity: number;
  color?: string;
};

type CartStore = {
  cart: CartItem[];
  addToCart: (product: ProductType, quantity: number, color?: string) => void;
  removeFromCart: (id: string, color?: string) => void;
};

const loadCartFromLocalStorage = (): CartItem[] => {
  const storedCart = localStorage.getItem('cart');
  return storedCart ? JSON.parse(storedCart) : [];
};

export const useCartStore = create<CartStore>((set) => ({
  cart: loadCartFromLocalStorage(), // Cargar el carrito desde localStorage
  addToCart: (product, quantity, color) =>
    set((state) => {
      const existingItemIndex = state.cart.findIndex(
        (item) => item.id === product.id && item.color === color
      );

      let newCart;
      if (existingItemIndex > -1) {
        newCart = [...state.cart];
        newCart[existingItemIndex].quantity += quantity;
      } else {
        newCart = [...state.cart, { ...product, quantity, color }];
      }

      localStorage.setItem('cart', JSON.stringify(newCart)); // Guardar en localStorage
      return { cart: newCart };
    }),
  removeFromCart: (id, color) =>
    set((state) => {
      const newCart = state.cart.filter(
        (item) => !(item.id === id && item.color === color)
      );
      localStorage.setItem('cart', JSON.stringify(newCart)); // Actualizar localStorage
      return { cart: newCart };
    }),
}));
