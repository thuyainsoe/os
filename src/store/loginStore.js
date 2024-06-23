import { create } from "zustand";

export const useLoginStore = create((set) => ({
  username: "",
  successSignIn: false,
  loginMethod: "phone",
  setLoginMethod: (type) => {
    set({ loginMethod: type });
  },
  setSuccessSignIn: () => {
    set({ successSignIn: true });
  },
  setUsername: (name) => {
    set({ username: name });
  },
  isOpen: false,
  setOpen: () => set({ isOpen: true }),
  setClose: () => {
    set({ isOpen: false });
  },
}));
