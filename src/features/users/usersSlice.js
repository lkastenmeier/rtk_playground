import { createSlice, nanoid } from "@reduxjs/toolkit";
 
const initialState = [
    {
        id: '1',
        name: 'Tiago'
    },
    {
        id: '2',
        name: 'João'
    },
    {
        id: '3',
        name: 'Maria'
    }
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})
export const selectAllUsers = state => state.users;
 export default usersSlice.reducer;