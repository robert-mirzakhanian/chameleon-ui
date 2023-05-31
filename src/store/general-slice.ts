import { createAction, createSlice } from "@reduxjs/toolkit";
import { stat } from "fs";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from "./app-store";
import {MockDto} from "../client/models";


export interface GeneralState {
    pageName: string
    breadcrumbs: string[],
    stubsIsLoaded: boolean
    stubs: Array<MockDto>
}

const initialState: GeneralState = {
    pageName: "Stubs",
    breadcrumbs: ["Stubs"],
    stubsIsLoaded: false,
    stubs: []
}

const hidrate = createAction<AppState>(HYDRATE);

export const generalSlice = createSlice({
    name: "general",
    initialState,
    reducers: {
        setPageName(state, action) {
            state.pageName = action.payload
        },
        setBreadcrumbs(state, action) {
            state.breadcrumbs = action.payload
        },
        setStubs(state, action) {
            state.stubsIsLoaded = false
            state.stubs = action.payload
        },
        setStubsIsLoaded(state, action) {
            state.stubsIsLoaded = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(hidrate, (state, action) => {
            return {
                ...state,
                ...action.payload.general
            };
        })
    }
})


export const {setPageName, setBreadcrumbs, setStubs, setStubsIsLoaded} = generalSlice.actions;

export const selectGeneralState = (state: AppState) => state.general


export default generalSlice.reducer;