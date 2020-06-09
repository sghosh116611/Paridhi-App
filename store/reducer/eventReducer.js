import EVENTS from "../../dummy-data/dummy-data";

const initialState = {
    events: EVENTS,
}

const eventReducer = (state = initialState,action) => {
    switch(action){
        default:
            return state;
    }
}

export default eventReducer;