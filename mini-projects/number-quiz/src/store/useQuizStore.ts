import { create } from "zustand";

interface QuizState {
  answer: number;
  count: number;
  previous: number;
  checkStatus: "up" | "down";
  result: boolean;
  increment: () => void;
  update: (num: number) => void;
  toggleStatus: (num: number) => void;
  success: () => void;
  reset: () => void;
}

const useQuizStore = create<QuizState>((set) => ({
  answer: Math.floor(Math.random() * 100) + 1,
  count: 0,
  previous: -1,
  checkStatus: "down",
  result: false,
  increment: () => set((state) => ({ count: state.count + 1 })),
  update: (num) => set(() => ({ previous: num })),
  toggleStatus: (num) =>
    set((state) => ({ checkStatus: state.answer > num ? "up" : "down" })),
  success: () => set(() => ({ result: true })),
  reset: () =>
    set(() => ({
      answer: Math.floor(Math.random() * 100) + 1,
      count: 0,
      previous: -1,
      checkStatus: "down",
      result: false,
    })),
}));

export { useQuizStore };
