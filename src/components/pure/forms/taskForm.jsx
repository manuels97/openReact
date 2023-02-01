import React, {useRef} from 'react';
import PropTypes from 'prop-types';
// import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task';
import { Tareas } from '../../../models/tareas';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const Taskform = ({add, length}) => {

     let Tarea= new Task();

    const initialValues={
         name:"",
         Email:""
       
    }

    const tareasSchema= Yup.object().shape(
        {
            name: Yup.string()
                    .min(2, "Nombre muy corto")
                    .max(30,"Nombre muy largo")
                    .required('Nombre requerido'),
            Email: Yup.string()
                .email('Invalid email format')
                .required('Email is required'),
                    
        }
    )

    const nameRef = useRef('');
    const EmailRef = useRef('');
    const conectado=useRef("")
    // const levelRef = useRef(LEVELS.NORMAL);

    function addContacto(e){
        e.preventDefault();
        const newTask = new Task(
            nameRef.current.value,
            EmailRef.current.value,
            false
            // levelRef.current.value
        );
        add(newTask);
    }

    // const tareaRef=useRef("");

    // function addTarea(e){
    //     e.preventDefault();
    //     const newTarea = new Tareas(
    //         tareaRef.current.value)
    //     addT(newTarea);
    // }

    return (

    <div>
        {/* <form onSubmit={addContacto} className='d-flex justify-content-center align-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg' required autoFocus placeholder='Nombre'/>
                <input ref={mail} id='inputDescription' type='text' className='form-control form-control-lg' required placeholder='Mail'/>
                
                <button type='submit' className='btn btn-success btn-lg ms-2'>
                    {length > 0 ? 'Agregar contacto' : 'Crear primer contacto'}
                </button>
            </div>
        </form> */}


        <Formik
            initialValues={initialValues}
            validationSchema={tareasSchema}
            onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2))
                }}
        >
         {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur }) => (
                        <Form onSubmit={addContacto}  className='d-flex justify-content-center align-items-center mb-4'>

                            <label htmlFor="name">Crear Tarea</label>
                            <Field  ref={nameRef} id='name'  className='form-control form-control-lg' required autoFocus type="text" name="name" placeholder="Nombre"  />
                            
                          
                            {
                                errors.name && touched.name && 
                                (
                                    <ErrorMessage name="name" component='div'></ErrorMessage>
                                )
                            }

                            <label htmlFor="Email">Email</label>
                            <Field  ref={EmailRef}  id="Email" className='form-control form-control-lg' type="email" name="Email" placeholder="example@email.com" />

                            {/* Email Errors */}
                            {
                                errors.Email && touched.Email && 
                                (
                                    <ErrorMessage name="Email" component='div'></ErrorMessage>
                                )
                            }
                            

                            <button type="submit"  className='btn btn-success btn-lg ms-2'>
                                {length > 0 ? 'Agregar contacto' : 'Crear primer contacto'}
                             </button>
                                {isSubmitting ? (<p>Sending your credentials...</p>): null}
                            
                            


                                {/* <div className='form-outline flex-fill'>
                                    <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg' required autoFocus placeholder='Nombre'/>
                                    <input ref={mail} id='inputDescription' type='text' className='form-control form-control-lg' required placeholder='Mail'/>
                                    


                                    <button type='submit' className='btn btn-success btn-lg ms-2'>
                                        {length > 0 ? 'Agregar contacto' : 'Crear primer contacto'}
                                    </button>
                                </div> */}
                         </Form>
                    )
            }



        </Formik>

        


        {/* <Formik
            initialValues={initialValues}
            validationSchema={tareasSchema}
            onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2))
                }}
        >
         {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur }) => (
                        <Form>
                            <label htmlFor="username">Crear Tarea</label>
                            <Field id="username" type="text" name="Tarea" placeholder="Crear Tarea" />
                            
                          
                            {
                                errors.tarea && touched.tarea && 
                                (
                                    <ErrorMessage name="tarea" component='div'></ErrorMessage>
                                )
                            }

                            <button onSubmit={addTarea} type="submit">Crear Tarea</button>
                            {isSubmitting ? (<p>Sending your credentials...</p>): null}

                        </Form>
                    )
            }



        </Formik> */}

                
        

    </div>
    );
}

Taskform.protoTypes = {
    add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired
}

export default Taskform;
