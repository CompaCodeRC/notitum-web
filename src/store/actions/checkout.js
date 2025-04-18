import { createSlice } from "@reduxjs/toolkit";

export const checkout = createSlice({
    name: "checkout",
    initialState: {
        modal: false,
        step: 0,
        cart: [],
        customer: {
            email: ""
        },
        payment: {
            method: "",
            amount: 0,
            currency: ""
        }
    },
    reducers: {
        set_modal: (state, action) => {
            const modal = action.payload;
            state.modal = modal;
        },
        set_step: (state, action) => {
            const step = action.payload;
            state.step = step;
        },
        add_item: (state, action) => {
            const item = action.payload;
            state.cart.push(item);
        },
        remove_item: (state, action) => {
            const item_id = action.payload;
            state.cart = state.cart.filter(i => i.id !== item_id);
        },
        set_customer: (state, action) => {
            const customer = action.payload;
            state.customer = customer;
        },
        set_payment: (state, action) => {
            const payment = action.payload;
            state.payment = { ...state.payment, ...payment };
        },
    },
});

export const { set_modal, set_step, add_item, remove_item, set_customer, set_payment } = checkout.actions;
export default checkout.reducer;