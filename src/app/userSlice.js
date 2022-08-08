import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    isHasUser: false,
    currentUser: {},
};

export const userSlice = createSlice({
    name: 'photos',
    initialState,
    reducers: {
        setIsHasUser: (state, action) => {
            state.isHasUser = action.payload
        },

        setDataUser: (state, action) => {
            state.currentUser = action.payload
        }
    },
});

export const { setIsHasUser, setDataUser } = userSlice.actions;

export default userSlice.reducer;
