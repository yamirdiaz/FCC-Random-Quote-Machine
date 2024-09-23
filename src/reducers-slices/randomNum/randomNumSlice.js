import { createSlice } from "@reduxjs/toolkit"


//const currentState = getState();
console.log("hola")
//console.log(currentState);


const initialState = {
    
    numOfColorRed: Math.floor(Math.random()* 128),
    numOfColorGreen: Math.floor(Math.random()* 128),
    numOfColorBlue: Math.floor(Math.random()* 128),
    
}

const randomNumSlice = createSlice({
    name: "randomNum",
    initialState,
    reducers: {
        generateNewColor: (state) => {            
            state.numOfColorRed = Math.floor(Math.random()* 128);
            state.numOfColorGreen = Math.floor(Math.random()* 128);
            state.numOfColorBlue = Math.floor(Math.random()* 128);
        },
        
    },
})

export default randomNumSlice.reducer
export const { generateNewColor } = randomNumSlice.actions