import { CouponTypes } from "@/types";
import { create } from "zustand";

type State = {
  showModal: boolean;
  couponInfo: any;
};

type Action = {
  openModal: () => void;
  setCouponInfo: (info: CouponTypes) => void;
  hideModal: () => void;
};

const useStore = create<State & Action>((set) => ({
  showModal: true,
  couponInfo: {},
  openModal: () => set(() => ({ showModal: true })),
  hideModal: () => set(() => ({ showModal: false, couponInfo: {} })),
  setCouponInfo: (info: CouponTypes) =>
    set((state: any) => {
      console.log({ info });
      return { couponInfo: info };
    }),
}));

export default useStore;
