import React, {useState, useEffect} from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';
import '../../styles/task.scss'

const TaskListComponent = () => {

    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL);

    //estado del componente
    const [tasks, setTasks] = useState([defaultTask]);

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
        <div>
            <h1>
                Your Tasks:
            </h1>
            {/** TODO: Aplicar un for each para renderizar las tareas */}        
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
}

export default TaskListComponent;
