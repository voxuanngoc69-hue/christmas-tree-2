import { create } from 'zustand';

export enum TreeMode {
  SCATTERED = 'SCATTERED',
  TREE_SHAPE = 'TREE_SHAPE',
}

interface AppState {
  mode: TreeMode;
  toggleMode: () => void;
  setMode: (mode: TreeMode) => void;
}

export const useAppStore = create<AppState>((set) => ({
  mode: TreeMode.TREE_SHAPE,
  toggleMode: () =>
    set((state) => ({
      mode:
        state.mode === TreeMode.TREE_SHAPE
          ? TreeMode.SCATTERED
          : TreeMode.TREE_SHAPE,
    })),
  setMode: (mode) => set({ mode }),
}));