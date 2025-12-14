import {create} from "zustand";
import {immer} from "zustand/middleware/immer";
import {locations} from "#constants";

const loc=locations.work;
const useLocationStore = create(immer((set)=>({
    activeLocation:loc,
    setActiveLocation : (location )=> set((state)=>{
        state.activeLocation =location;
        if(location === undefined)return
        state.activeLocation = location;
}),
    resetActiveLocation : ()=> set((state)=>{
        state.activeLocation =loc;
    })


})))

export default useLocationStore;