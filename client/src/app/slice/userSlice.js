import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null,  // Stores user information, null when no user is logged in
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // Action to set or create a new user
        setUser: (state, action) => {
            state.user = action.payload; // Sets the user to the provided payload
        },
        // Action to update user information (e.g., name, email)
        updateUser: (state, action) => {
            if (state.user) {
                state.user = { ...state.user, ...action.payload }; // Updates only the provided fields
            }
        },
        // Action to clear the user data (e.g., on logout)
        logout: (state) => {
            state.user = null; // Clears the user information
        },
    },
})

// Action creators are generated for each case reducer function
export const { setUser, updateUser, logout } = userSlice.actions

export default userSlice.reducer
