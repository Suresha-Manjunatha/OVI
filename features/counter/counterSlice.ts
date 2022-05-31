import {
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import { string } from 'yup';
import type { RootState } from '../../app/store';


export type CounterState = {
    value: string;
    navigation: string
};

const initialState: CounterState = {
    value: 'admin',
    navigation: ''
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setValueType: (state, action: PayloadAction<string>) => {
            state.value = action.payload
        },

        setNavigation: (state, action: PayloadAction<string>) => {
            state.navigation = action.payload
        }
    },
});

export const {
    setValueType,
    setNavigation
} = counterSlice.actions;

export const selectCount = (state: RootState) => state.counter.value;
export const selectNavigation = (state: RootState) => state.counter.navigation;

export default counterSlice.reducer;
