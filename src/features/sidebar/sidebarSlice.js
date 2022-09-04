import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    open : false,
}

export const sidebarSlice = createSlice({
    name : 'sidebar',
    initialState,
    reducers : {
        openSidebar : (state) => {
            state.open = true
        },
        closeSidebar : (state) => {
            state.open = false
        }
    }
})


export const { openSidebar, closeSidebar} = sidebarSlice.actions
export default sidebarSlice.reducer