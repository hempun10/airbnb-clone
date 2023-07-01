import { LoginModalStoreType } from "@/types/types";
import { create } from "zustand";

const useLoginModal = create<LoginModalStoreType>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useLoginModal;
