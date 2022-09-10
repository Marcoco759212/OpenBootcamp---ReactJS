import React from 'react';
import { Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';
import '../../../styles/taskFormik.scss'

const TaskFormik = ({add}) => {

    const initialValues = {
        taskname: '',
        description: '',
        level: ''
    }

    const registerSchema = Yup.object().shape(
        {
            taskname: Yup.string()
                .max(20, 'Taskname too long')
                .required('Taskname is required'),
            description: Yup.string()
                .max(30, 'Description too long')
                .required('Description is required'),
            level: Yup.string().oneOf(
                    [LEVELS.NORMAL, 
                    LEVELS.BLOCKING, 
                    LEVELS.URGENT], 
                    'You must select a level: normal, bloking and urgent'
                )
                .required('Level is required')
        }
    )

    const addTask = (values) => {
        const newTask = new Task(
            values.taskname,
            values.description,
            false,
            values.level
        );

        add(newTask);
    }

    return (
        <div className='container-form'>
            <Formik
                initialValues={initialValues}
                validationSchema={registerSchema}
                onSubmit={
                    async (values) => {
                        await new Promise((r) => setTimeout(r, 1500));
                        // alert(JSON.stringify(values, null, 2));
                        // console.log(values)
                        addTask(values)
                        
                    }
                }>

                {
                    ({
                        values,
                        errors,
                        touched,
                        isSubmitting,
                        setFieldValue,
                        resetForm,
                        handleChange,
                        handleBlur
                    }) => (
                        <Form>
                            <div className='form-tasks'
                            style={
                                isSubmitting ? 
                                    {display: 'none'}
                                :
                                    {display: 'flex'}
                            }>
                            <h1 className='title-form'>
                                Registrar Tarea
                            </h1>
                                <div className='rows-form'>
                                    <label htmlFor='taskname'
                                        className='labels-form'>
                                        Username
                                    </label>
                                    <div className='cols-form'>
                                        <Field id='taskname' 
                                            name='taskname' 
                                            type='text' 
                                            placeholder='Taskname'
                                                className='inputs-form'
                                            />
                                        { errors.taskname && touched.taskname && 
                                            (
                                                <ErrorMessage name="taskname" 
                                                    component="div"
                                                    className='messages-form'></ErrorMessage>
                                            )    
                                        }
                                    </div>
                                </div>
                                <div className='rows-form'>
                                    <label htmlFor='description'
                                    className='labels-form'>
                                        Email
                                    </label>
                                    <div className='cols-form'>
                                        <Field id='description' 
                                            name='description' 
                                            type='text' 
                                            placeholder='Description'
                                                className='inputs-form'
                                            />

                                        { errors.description && touched.description && 
                                            (
                                                <ErrorMessage name="description" 
                                                    component="div"
                                                    className='messages-form'></ErrorMessage>
                                            )    
                                        }
                                    </div>
                                </div>
                                <div className='rows-form'>
                                    <label htmlFor='level'
                                    className='labels-form'>Priority</label>
                                    <div className='cols-form'>
                                        <select  
                                            id='level'
                                            name='level'
                                            onChange={option => setFieldValue('level', option.target.value)}
                                            className='inputs-form'>
                                            <option value={null}>Select a level</option>
                                            <option value={LEVELS.NORMAL}>Normal</option>
                                            <option value={LEVELS.URGENT}>Urgent</option>
                                            <option value={LEVELS.BLOCKING}>Blocking</option>
                                        </select>

                                        { errors.level && touched.level && 
                                            (
                                                <ErrorMessage name="level" 
                                                    component="div"
                                                    className='messages-form'></ErrorMessage>
                                            )    
                                        }
                                    </div>
                                </div>

                                <button type='submit'
                                className='btn-form'
                                onClick={ async () => {
                                    await new Promise((r) => setTimeout(r, 2000));
                                    resetForm()
                                }}>
                                    Register task 
                                </button>
                            </div>
                            {isSubmitting ? 
                                    (
                                        <p className='msg-send'>
                                            Registering task...
                                        </p>
                                    ) 
                                :
                                    null
                            }
                        </Form>
                    )
                }
            </Formik>
        </div>
    );
}

export default TaskFormik;
