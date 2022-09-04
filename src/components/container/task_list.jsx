import React, {useState, useEffect} from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';
import '../../styles/task.scss'
import TaskFormik from '../pure/forms/taskFormik';

const TaskListComponent = () => {

    const defaultTask1 = new Task('Example1', 'Default description1', false, LEVELS.NORMAL);
    const defaultTask2 = new Task('Example2', 'Default description2', false, LEVELS.URGENT);
    const defaultTask3 = new Task('Example3', 'Default description3', true, LEVELS.BLOCKING);
    //estado del componente
    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log('Task State has been modified');
        setTimeout(() => {
            setLoading(false)
        }, 2000)
        return () => {
            console.log('TaskList component is going to unmount...');
        };
    }, [tasks]);

    const completeTask = (task) => {
        console.log('ejecutando completed task');
        const index = tasks.indexOf(task)
        const temTasks = [...tasks]
        temTasks[index].completed = !temTasks[index].completed;
        setTasks(temTasks)
    }

    const deleteTask = (task) => {
        console.log('ejecutando delete task');
        const index = tasks.indexOf(task)
        const temTasks = [...tasks]
        temTasks.splice(index,1)
        setTasks(temTasks)
    }

    const addTask = (task) => {
        console.log('ejecutando completed task');
        const temTasks = [...tasks]
        temTasks.push(task)
        setTasks(temTasks)
    }

    const taskTable = (
            <table>
                <thead>
                    <tr>
                        <th scope='col'>
                            Title
                        </th>
                        <th scope='col'>
                            Descripcion
                        </th>
                        <th scope='col'>
                            Priority
                        </th>
                        <th scope='col'>
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    { tasks.map((t, i) => {
                        return(
                            <TaskComponent
                                key={i} 
                                task={t}
                                complete={completeTask}
                                remove={deleteTask}>
                            </TaskComponent>
                        )
                    }) }
                </tbody>
            </table>
        )

    return (
        <div style={{color: 'black'}}>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h1>Your Tasks:</h1>
                    </div>
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={{ position: 'relative', height: '400px' }}>
                        { tasks.length ? 
                            loading ? <p>Loanding tasks...</p> : taskTable 
                        : 
                            <h3> There are no tasks </h3>
                        }
                    </div>
                </div>
            </div>
            {/* <TaskForm add={ addTask }></TaskForm> */}
            <TaskFormik add={addTask} ></TaskFormik>
        </div>
    );
}

export default TaskListComponent;
