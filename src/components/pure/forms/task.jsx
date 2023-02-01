import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// Models
import { Task } from '../../../models/task';
import { Tareas } from '../../../models/tareas.js';
// import { LEVELS } from '../../models/levels.enum';

// Importamos la hoja de estilos de task.scss
// import '../../styles/task.scss'

const TaskComponent = ({ task, complete, remove }) => {

    useEffect(() => {
        console.log('Created Task')
        return () => {
            console.log(`Task: ${task.name} is going to unmount`);
        }
    }, [task]);

  
    /**
     * Function that returns icon depending on completion of the task
     */
    function taskCompletedIcon(){
        if(task.completed){
            return (<button onClick={() => complete(task)} className='bi-toggle-on task-action' style={{color: 'green'}}>Conectado</button>
            )
        }else{
            return (<button onClick={() => complete(task)} className='bi-toggle-on task-action' style={{color: 'red'}}>Desconectado</button>
            )
        }
    }

    const taskCompleted = {
        color: 'gray',
        fontWeight: 'bold',
        textDecoration: 'line-through'
    }

    const taskPending = {
        fontWeight: 'bold',
        color: 'tomato'
    }

    return (
        <tr className='fw-normal' style={task.conectado ? taskCompleted : taskPending}>
            <th>
                <span className='ms-2'>{task.name}</span>
            </th>
            <td className='align-middle'>
                <span>{task.Email}</span>
            </td>
            <td className='align-middle'>
               <span> {taskCompletedIcon()} </span>
            </td>
            <td className='align-middle'>
                
                
                <button className='bi-trash task-action' style={{color: 'tomato'}} onClick={() => remove(task)}>Eliminar</button>
            </td>

        

        </tr>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};


export default TaskComponent;
