import {create} from "zustand";
import {immer} from "zustand/middleware/immer";
import {locations} from "#constants";

const loc=locations.work;
const useLocationStore = create(immer((set)=>({
    activeLocation:loc,
    setActiveLocation : (location =null )=> set((state)=>{
        state.activeLocation =location;
}),
    resetActiveLocation : ()=> set((state)=>{
        state.activeLocation =loc;
    })


})))

export default useLocationStore;