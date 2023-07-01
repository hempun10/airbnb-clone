import { RegisterModalStoreType } from "@/types/types";
import { create } from "zustand";

const useRegisterModal = create<RegisterModalStoreType>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useRegisterModal;
