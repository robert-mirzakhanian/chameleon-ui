import { createAction, createSlice } from "@reduxjs/toolkit";
import { stat } from "fs";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from "./app-store";
import path from "path";

export enum HttpMethod {
    GET,
    POST,
    DELETE,
    HEAD,
    PUT,
    PATCH,
    OPTIONS,
    TRACE
  }

export interface CreateStubData {
    name: string,
    path: string,
    method: HttpMethod
}

export interface CreateStubState {
    isInitLoaded: boolean,
    text: string,
    data: CreateStubData
}

const initialState: CreateStubState = {
    isInitLoaded: false,
    text: "Outlined",
    data: {
        name: "Name",
        path: "Path",
        method: HttpMethod.GET
    }
}

const hidrate = createAction<AppState>(HYDRATE);

export const createStubSlice = createSlice({
    name: "createStub",
    initialState,
    reducers: {
        initiLoad(state, action) {
            state.isInitLoaded = true
        },
        setText(state, action) {
            state.text = action.payload
        },
        setName(state, action) {
            state.data.name = action.payload
        },
        setPath(state, action) {
            state.data.path = action.payload
        },
        setMethod(state, action) {
            state.data.method = action.payload as HttpMethod
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


export const { initiLoad, setText, setName, setPath, setMethod } = createStubSlice.actions;

export const selectCreateStubState = (state: AppState) => state.createStub


export default createStubSlice.reducer;