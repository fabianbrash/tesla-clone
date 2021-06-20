import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    menus: ["Model S", "Model 3", "Model X", "Model Y"]
}

const menuSlice = createSlice({
    name: "menu",
    initialState: initialState,
    reducers: {}
})

export const selectMenus = state => state.menu.menus;

export default menuSlice.reducer