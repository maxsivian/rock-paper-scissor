import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isRouteLoading: false,
    routeColor: "var(--color3)"
};

export const routeSlice = createSlice({
    name: "route",
    initialState,
    reducers: {
        setRouteLoading: (state, action)=>{
            state.isRouteLoading = action.payload
        },
        setRouteColor: (state, action)=>{
            state.routeColor = action.payload
        }
    },
   
}) 

export const { setRouteLoading, setRouteColor } = routeSlice.actions

export default routeSlice.reducer