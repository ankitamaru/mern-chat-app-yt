import { create } from "zustand";

const useConversation = create((set) => ({
  selectedConvseration: null,
  setSelectedConvseration: (selectedConvseration) =>
    set({ selectedConvseration }),
  messages: [],
  setMessages: (messages) => set({ messages }),
}));

export default useConversation;
