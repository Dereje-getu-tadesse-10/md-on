import React from 'react';
import { create } from 'zustand'

type MDContext = {
    markdown: string;
    setMarkdown: (markdown: string) => void;
}

const useMDStore = create<MDContext>((set) => ({
    markdown: '# Hello World',
    setMarkdown: (markdown) => set({ markdown }),
}))

export default useMDStore
