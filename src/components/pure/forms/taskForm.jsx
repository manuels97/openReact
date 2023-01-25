import React, {useRef} from 'react';
import PropTypes from 'prop-types';
// import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task';

const Taskform = ({add, length}) => {

    const nameRef = useRef('');
    const mail = useRef('');
    const conectado=useRef("")
    // const levelRef = useRef(LEVELS.NORMAL);

    function addContacto(e){
        e.preventDefault();
        const newTask = new Task(
            nameRef.current.value,
            mail.current.value,
            false
            // levelRef.current.value
        );
        add(newTask);
    }

    return (
        <form onSubmit={addContacto} className='d-flex justify-content-center align-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg' required autoFocus placeholder='Nombre'/>
                <input ref={mail} id='inputDescription' type='text' className='form-control form-control-lg' required placeholder='Mail'/>
                {/* <select className='form-control form-control-lg' ref={levelRef} defaultValue={LEVELS.NORMAL} id='selectLevel'>
                        <option value={LEVELS.NORMAL}>
                            Normal
                        </option>
                    <option value={LEVELS.URGENT}>
                        Urgent
                    </option>
                    <option value={LEVELS.BLOCKING}>
                        Blocking
                    </option>
                </select> */}
                <button type='submit' className='btn btn-success btn-lg ms-2'>
                    {length > 0 ? 'Agregar contacto' : 'Crear primer contacto'}
                </button>
            </div>
        </form>
    );
}

Taskform.protoTypes = {
    add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired
}

export default Taskform;
