// valor inicial
const defaultValue = {
    filterValue : null,
    searchValue: null,
}

// ACTION TYPES
const FILTER = 'FILTER';
const SEARCH = 'SEARCH';


// REDUCER
export default function FilterReducer(state = defaultValue, { type, payload }) {
    switch(type) {
        case FILTER: return {...state, filterValue: payload };  
        case SEARCH: return {...state, searchValue: payload };                
        default: return defaultValue
    }
}

export const filterActionNoFilter = () => dispatch => {    
    const filterValue = null;
    dispatch({ type: FILTER, payload: filterValue });
}

export const filterActionPC = () => dispatch => {   
    const filterValue = "PC"; 
    dispatch({ type: FILTER, payload: filterValue });  
}


export const filterActionPS = () => dispatch => {   
    const filterValue = "Playstation"; 
    dispatch({ type: FILTER, payload: filterValue });  
}

export const filterActionXbox = () => dispatch => {   
    const filterValue = "Xbox"; 
    dispatch({ type: FILTER, payload: filterValue });  
}

export const filterActionNintendo = () => dispatch => {   
    const filterValue = "Nintendo"; 
    dispatch({ type: FILTER, payload: filterValue });  
}


export const filterActionFree = () => dispatch => {   
    const filterValue = "Free"; 
    dispatch({ type: FILTER, payload: filterValue });  
}

export const filterActionSearch = (value) => dispatch => {   
    const searchValue = value; 
    dispatch({ type: SEARCH, payload: searchValue });  
}
