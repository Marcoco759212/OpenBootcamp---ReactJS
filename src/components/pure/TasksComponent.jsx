import React, {useContext, useReducer, useRef, useEffect, useState} from 'react';

// global context
const globalContext = React.createContext([]);

// declare casuistics consts
const ADD_TASK = 'ADD_TASK';
const DELET_TASK = 'DELETE_TASK';
const FILTER_TASKS = 'FILTER_TASKS';
const COMPLETE_TASK = 'COMPLETE_TASK';
const ALL = 'ALL';
const PENDING = 'PENDING';
const COMPLETED = 'COMPLETED';

// declare initial state
const initialState = {
    tasks: [],
    filter: ALL
}

/**
 * Reducer otions
 * @param {*} state 
 * @param {*} action 
 */
const tasksReducer = (state, action) => {
    switch (action.type) {
        case ADD_TASK:
            return{
                tasks:[
                    ...state.tasks,
                    {
                        id: state.tasks.length !== 0 ? state.tasks[state.tasks.length -1].id + 1 : 1,
                        task: action.payload.task,
                        isCompleted: false
                    }
                ],
                filter: state.filter
            }
        case COMPLETE_TASK:
            return {
                tasks: state.tasks.map((item) => 
                        (item.id === action.payload.id) ?
                            {
                                ...item,
                                isCompleted: !item.isCompleted
                            }
                        :
                            item
                ),
                filter: state.filter
            }
        case DELET_TASK:
            const allList = [...state.tasks];
            const taskIndex = allList.findIndex((task) => task.id === action.payload.id);
            allList.splice(taskIndex,1);
            return {
                tasks: allList,
                filter: state.filter
            }
        case FILTER_TASKS:
            return{
                tasks: [...state.tasks],
                filter: action.payload.filter
            }
        default:
            return state;
    }
}

// #################################
//            TaskList             
// #################################
const TaskList = () => {

    // use global context
    const [state, dispatch] = useContext(globalContext);
    // const [listTasks, setListTasks] = useState([]);

    const filterList = () => {
        switch (state.filter) {
            case ALL:
                return state.tasks
            case PENDING:
                return state.tasks.filter((item) => item.isCompleted === false)
            case COMPLETED:
                return state.tasks.filter((item) => item.isCompleted === true)
            default:
                return state.tasks
        }
    }

    return(
        <>
            <li>
                <div>
                    <span>Task ID</span>
                    <span>Taks name</span>
                </div>
                <span style={{paddingRight: '1rem'}}>Action</span>
            </li>
            {
                filterList().map((item) => (
                    <li key={item.id} 
                        style={{padding: '0 1rem 0 2rem'}}>
                        <div style={{color: item.isCompleted ? 'green' : null}}
                            onClick={
                                () => dispatch({
                                    type: COMPLETE_TASK,
                                    payload:{
                                        id: item.id
                                    }
                                })
                            }>
                            <span>{item.id}</span>
                            <span>{item.task}</span>
                        </div>
                        <button key={item.id}
                            onClick={
                                    () => dispatch({
                                        type: DELET_TASK,
                                        payload:{
                                            id: item.id
                                        }
                                    })
                                }>
                            Delete Task
                        </button>
                    </li>
                ))
            }
        </>
    );
}

// #################################
//            TaskForm             
// #################################
const TaskForm = () => {

    const taskText = useRef();

    const [state, dispatch] = useContext(globalContext);

    const addTask = () => {
        dispatch({
            type: ADD_TASK,
            payload: {
                task: taskText.current.value
            }
        });
        taskText.current.value = '';
    }

    return(
        <div className='task-component-form'>
            <input type='text' 
                    ref={taskText}
                />
            <button onClick={addTask}>Add Task</button>
        </div>
    )
}

// #################################
//          TaskFilters             
// #################################
const TaskFilters = () => {

    const [state, dispatch] = useContext(globalContext);

    const setFilter = (val) => {
        dispatch({
            type: FILTER_TASKS,
            payload:{
                filter: val
            }
        })
    }

    return(
        <>
            <button onClick={() => setFilter(ALL)}>
                ALL
            </button>
            <button onClick={() => setFilter(PENDING)}>
                PENDING
            </button>
            <button onClick={() => setFilter(COMPLETED)}>
                COMPLETED
            </button>
        </>
    )
}

// #################################
//         TaskComponent             
// #################################
const TasksComponent = () => {

    const [state, dispatch] = useReducer(tasksReducer, initialState);
    
    return (
        <globalContext.Provider value={[state, dispatch]}>
            <div className='task-component'>
                <h2>Add taks</h2>
                <TaskForm ></TaskForm>
            </div>
            <div className='task-component'>
                <h2>Task list</h2>
                <ul className='task-component-list'>
                    <TaskList></TaskList>
                </ul>
            </div>
            <div className='task-component-filters'>
                <TaskFilters></TaskFilters>
            </div>
        </globalContext.Provider>
    );
}

export default TasksComponent;
