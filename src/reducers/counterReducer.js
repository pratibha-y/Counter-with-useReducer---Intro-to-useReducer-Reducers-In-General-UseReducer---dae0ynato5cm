/*const counterReducer = (state,action) =>{

}

export {counterReducer}*/
const counterReducer = (state,action) =>{
    switch(action){
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        default:
            return state;
    }
}

export {counterReducer}
