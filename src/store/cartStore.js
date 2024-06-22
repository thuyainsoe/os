import { create } from "zustand";

export const useCartStore = create((set) => ({
  itemCount: 0,
  addItem: (amount) =>
    set((state) => ({ itemCount: state.itemCount + amount })),
}));
