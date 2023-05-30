import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock }  from "@fortawesome/free-solid-svg-icons";
import Button from '../Button/Button';


export default function FormLogin() {

  return (
    
    <div className='bg-dark bg-gradient d-flex justify-content-center align-items-center vh-100 flex-column'>
        <div className="bg-white p-5 rounded-5"  style={{width:"420px"}}>

            <h2 className='fs-1 text-center fw-bold mb-4 text-dark'>Login</h2>
            <div className="input-group">
                <div className="input-group-text bg-info text-white">
                    <FontAwesomeIcon icon={faUser}/>
                </div>
                <input className='form-control shadow-none' type="text" placeholder='Usuario' />
            </div>
            <div className="input-group mt-3">
                <div className="input-group-text bg-info text-white">
                    <FontAwesomeIcon icon={faLock}/>
                </div>
                <input className='form-control shadow-none' type="password" placeholder='Contraseña' />
            </div>
            <div className="d-flex justify-content-around mt-2 p-1">
                <div className="d-flex gap-1">
                    <input className='form-check-input' type="checkbox"/>
                    <p className='text-secondary m-0'>Recuerdame</p>
                </div>
                <div className="">
                    <a className='text-decoration-none text-info fw-semibold fst-italic' href="">¿Olvidaste tu contraseña?</a>
                </div>
            </div>
            <div className="mt-3">
                <Button className={'btn btn-info text-white w-100'}>Login</Button>
            </div>
            <div className="d-flex gap-2 justify-content-center mt-3">
                <p>¿No tienes una cuenta?</p> 
                <a className='text-decoration-none text-info fw-semibold fst-italic' href="">Registrarse</a>
            </div>
        </div>
    </div>
  )
}
