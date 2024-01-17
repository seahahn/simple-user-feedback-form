import { create } from "zustand";

type FeedbackType = { [key: number]: string | string[] };

interface FeedbackState {
  feedbacks: FeedbackType;
  updateFeedbacks: (answer: FeedbackType) => void;
  removeFeedbacks: () => void;
}

/**
 * Zustand store for saving feedback answers
 */
export const useFeedbackStore = create<FeedbackState>()((set) => ({
  feedbacks: {},
  updateFeedbacks: (answer) => set((state) => ({ feedbacks: { ...answer } })),
  removeFeedbacks: () => set({}),
}));
