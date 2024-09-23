
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'


const initialState = {
    loading: false,
    quotes: [],
    error: "",
    numOfQuote: Math.floor(Math.random()* 10),
} 

//Fetching generates always, pending, fulfilled and rejectec action types
export const fetchQuotes = createAsyncThunk("Quotes/fetchQuotes", () => {
    return axios
    .get("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
    .then((response) => response.data.quotes)
})

const QuotesSlice = createSlice({
    name: 'Quotes',
    initialState,
    reducers: {
        newNumOfQuote: (state) => {
            state.numOfQuote = Math.floor(Math.random()* state.quotes.length)
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchQuotes.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchQuotes.fulfilled, (state, action) => {
            state.loading = false
            state.quotes = action.payload
            state.error= ""

        })
        builder.addCase(fetchQuotes.rejected, (state) => {
            state.loading = false
            state.quotes = []
            state.error = "Error: Page error 404"
        })
    }
})

console.log(initialState);

export default QuotesSlice.reducer
export const { newNumOfQuote } = QuotesSlice.actions
