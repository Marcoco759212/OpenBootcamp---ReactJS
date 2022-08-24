import React from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';

const TaskListComponent = () => {

    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL);

    const changeState = () => {
        console.log('TODO: Cambiar el estado de una tarea');
    }

    return (
        <div>
            <div>
                Your Tasks:
            </div>
            {/** TODO: Aplicar un for each para renderizar las tareas */}        
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
}

export default TaskListComponent;
