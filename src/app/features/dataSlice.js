// authSlice.js
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  initialState: {
    isAuthenticated: false,
    productDetails: {},
    wishlistProducts: [],
    messageReceiver: '',
    membership: [],
    messages: [],
    chatList: [],
  }
}

const globalSlice = createSlice({
  name: "globalValues",
  initialState,

  reducers: {
    loginSuccess: (state) => {
      state.isAuthenticated = !state.isAuthenticated;
    },
    viewDetails: (state, action) => {
      state.productDetails = action.payload
    },
    wishlistdata: (state, action) => {
      state.wishlistProducts = action.payload;
      console.log(state.wishlistProducts, 'hai')
    },
    messageReceiverId: (state, action) => {
      state.messageReceiver = action.payload;
    },
    membershipPlans: (state, action) => {
      state.membership = action.payload
    },
    previouMessages: (state, action) => {
      state.messages = action.payload
    },
    chatCollections: (state, action) => {
      state.chatList = action.payload
    }

  }
})

export const { loginSuccess, viewDetails, wishlistdata, messageReceiverId, authUser, membershipPlans, previouMessages, chatCollections } = globalSlice.actions;
export default globalSlice.reducer;
