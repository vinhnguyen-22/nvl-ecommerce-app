import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { Product } from "../../../app/model/product";
import axios from "axios";



export const productsAdapter = createEntityAdapter<Product>();

export const fetchProductThunk = createAsyncThunk<Product[]>(
    'product/fetchproduct',
    async () => {
        try {
            const response = await axios.get('products');
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
);

export const productSlice = createSlice ({
    name: 'product',
    initialState: productsAdapter.getInitialState({
        status: 'idle',
        productloaded: false,
    }),
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchProductThunk.pending, (state) => {
            state.status = 'pendingFetchProduct';
        });
        builder.addCase(fetchProductThunk.rejected, (state)=>{
            state.status = 'idle'
        })
        builder.addCase(fetchProductThunk.fulfilled, (state, action) =>{
            productsAdapter.setAll(state, action.payload)
            state.status = 'idle'
            state.productloaded = true;
        }) 
    },
    
})


