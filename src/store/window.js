import {create} from "zustand";
import {INITIAL_Z_INDEX, WINDOW_CONFIG} from "#constants/index.js";
import {immer} from "zustand/middleware/immer";
const useWindowStore = create(immer((set)=>({
    windows:WINDOW_CONFIG ,
        nextZindex:INITIAL_Z_INDEX +1 ,//this decides which window is on top
    openWindow:(windowkey,data=null)=> set((state)=>{
      const win = state.windows[windowkey];
        if(!win)return
      win.isOpen = true;
      win.zIndex=state.nextZindex;
      win.data = data ??win.data;
      state.nextZindex++;
    }),
    closeWindow:(windowkey)=> set((state)=>{
        const win = state.windows[windowkey];
        if(!win)return
        win.isOpen = false;
        win.zIndex=INITIAL_Z_INDEX;
        win.data = null;

    }),
    focusWindow:(windowkey)=> set((state)=>{
        const win = state.windows[windowkey];
        // win.isOpen = true ;
        win.zIndex=state.nextZindex++;

    }),
    maximizeWindow: (windowkey) => set((state) => {
        const win = state.windows[windowkey];
        if (!win) return;
        win.isMaximized = !win.isMaximized;
    }),
})));

export default useWindowStore;