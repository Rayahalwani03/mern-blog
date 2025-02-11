import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    error: null,
    loading: false
};

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        signInStart: (state)=>{
            state.loading = true;
            state.error = null;
        },
        signInSuccess: (state, action)=>{
            state.currentUser = action.payload; // user details 
            state.loading = false;
            state.error = null;
        },
        signInFailure: (state, action)=>{ // no valid user 
            state.loading = false; 
            state.error = action.payload;
        }

    }
});

export const {signInStart, signInSuccess, signInFailure} = userSlice.actions; 

//if we use export default, we could only export one thing.
//we are exporting mutiple actions

//With export default, you must import everything and rename manually
//With named exports, you can only import what you need:



export default userSlice.reducer; // we export as defult we can rename it later 