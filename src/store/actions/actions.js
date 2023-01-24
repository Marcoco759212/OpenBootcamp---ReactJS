// Incremental ID for Todos

let nextTodoId = 0;

//action types
export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/**
 * 
 * @param {string} text 
 * @returns action ADD_TODO
 */
export const addTodo = (text) => {
    return{
        type: ADD_TODO,
        payload: {
            id: nextTodoId ++,
            text
        }
    }
}

/**
 * 
 * @param {number} id 
 * @returns action TOGGLE_TOD
 */
export const toggleTodo = (id) =>{
    return{
        type: TOGGLE_TODO,
        payload: {
            id
        }
    }
}

/**
 * 
 * @param {string} filter 
 * @returns action SET_VISIBILITY_FILTER
 */
export const setVisibilityFilter = (filter) => {
    return{
        type: SET_VISIBILITY_FILTER,
        payload:{
            filter
        }
    }
}