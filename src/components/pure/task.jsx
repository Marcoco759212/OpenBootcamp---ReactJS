import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import '../../styles/task.scss';
import { LEVELS } from '../../models/levels.enum';

const TaskComponent = ({task, complete, remove}) => {

    useEffect(() => {
        console.log('Tarea creada');
        return () => {
            console.log(`Task ${task.name} is going to unmount`);
        };
    }, [task]);

    const taskLevelBage = () => {
        switch (task.level) {
            case LEVELS.NORMAL:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-primary'>
                            {task.level}
                        </span>
                    </h6>
                )
                break;
            case LEVELS.URGENT:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-warning'>
                            {task.level}
                        </span>
                    </h6>
                )
                break;
            case LEVELS.BLOCKING:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-danger'>
                         {task.level}
                        </span>
                    </h6>
                )
                break;
            default:
                break;
        }
    }

    const taskCompleted = () => {
        if(task.completed){
            return(
                <i onClick={ () => complete(task) } className='bi-toggle-on task-action' style={{color: 'green'}}></i> 
            )
        }else{
            return(
                <i onClick={ () => complete(task) } className='bi-toggle-off task-action' style={{color: 'grsy'}}></i>
            )
        }
    }

    return (
        <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{task.name}</span>
            </th>
            <td className='align-middle'>
                    <samp>{task.description}</samp>
            </td>
            <td className='align-middle'>
                {taskLevelBage()}
            </td>
            <td className='align-middle'>
                { taskCompleted() }
                <i onClick={ () => remove(task)} className='bi-trash task-action' style={{ color: 'tomato' }}></i>
            </td>     
        </tr>
    );
};


TaskComponent.propTypes = {
    task : PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};


export default TaskComponent;
