import React, {useState, useEffect} from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';
import '../../styles/task.scss'
import TaskForm from '../pure/forms/taskForm';

const TaskListComponent = () => {

    const defaultTask1 = new Task('Example1', 'Default description1', false, LEVELS.NORMAL);
    const defaultTask2 = new Task('Example2', 'Default description2', false, LEVELS.URGENT);
    const defaultTask3 = new Task('Example3', 'Default description3', true, LEVELS.BLOCKING);
    //estado del componente
    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log('Task State has been modified');
        setLoading(false)
        return () => {
            console.log('TaskList component is going to unmount...');
        };
    }, [tasks]);

    const changeCompleted = () => {
        console.log('TODO: Cambiar el estado de una tarea');
    }

    return (
        <div style={{color: 'black'}}>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h5>Your Tasks:</h5>
                    </div>
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={{ position: 'relative', height: '400px' }}>
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
                                            task={t}>
                                        </TaskComponent>
                                    )
                                }) }
                            </tbody>
                        </table>
                    </div>
                    <TaskForm></TaskForm>
                </div>
            </div>
        </div>
    );
}

export default TaskListComponent;
