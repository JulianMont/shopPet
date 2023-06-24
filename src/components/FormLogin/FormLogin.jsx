import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import Button from '../Button/Button'
import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userContext } from '../../context/userContext'
import { ToastContainer, toast } from 'react-toastify'

export default function FormLogin() {

	const [userData, setUserData] = useState({
		email: "",
		password: "",
	})
	const navigateTo = useNavigate()


	const { logInUser } = useContext(userContext)

	function onInputchange(evt) {

		const prop = evt.target.name
		const value = evt.target.value

		const newData = { ...userData }
		
		newData[prop] = value

		setUserData(newData)
	}

	const [showPass, setShowPass] = useState(false)
	
	const handleShowPassword = () => {
		setShowPass(!showPass)
	}


	async function handleLogInUser(evt, userData) {
		
		evt.preventDefault()
		const hasError = await logInUser(userData)

		if (hasError) {
			toast.error(hasError)
		} else {
			navigateTo(`/`)
		}
			
	}

	return (
		<form onSubmit={(evt)=>{handleLogInUser(evt,userData)}}  className='bg-dark d-flex flex-column justify-content-center align-items-center vh-100'>
			<ToastContainer />
			<div className='bg-white p-5 rounded-5' style={{width: '420px'} }>
				<h2 className='fs-1 text-center fw-bold mb-4 text-dark'>Iniciar Sesion</h2>
				<div className='input-group'>
					<label htmlFor="formLoginUser" className='input-group-text bg-info text-white'>
							<FontAwesomeIcon icon={faUser} />
					</label>
					<input onChange={onInputchange} name='email' className='form-control shadow-none' type='email' placeholder='Email' />
				</div>
					<div className='input-group mt-3 '>
						<label htmlFor="formLoginPass " className='input-group-text bg-info text-white'>
							<FontAwesomeIcon icon={faLock}/>
						</label>
						<input onChange={onInputchange} name='password' className='form-control shadow-none position-relative z-0' type={`${showPass ? 'text' : 'password'}`} id='formLoginPass' placeholder='Contraseña' required />
						<div onClick={handleShowPassword} className="position-absolute z-1 text-info" style={{ top: '20%',left: '90%'}}>
							{showPass ? <FontAwesomeIcon icon={faEye}/> : <FontAwesomeIcon icon={faEyeSlash}/>}
						</div>
				</div>
				<div className='d-flex justify-content-around mt-2 p-1'>
					<div className='d-flex gap-1'>
						<input className='form-check-input' type='checkbox' />
						<p className='text-secondary m-0'>Recuerdame</p>
					</div>
					<div className=''>
						<a className='text-decoration-none text-info fw-semibold fst-italic' href=''>
							¿Olvidaste tu contraseña?
						</a>
					</div>
				</div>
				<div className='mt-3'>
					<Button className={'btn btn-info text-white w-100'}>Login</Button>
				</div>
				<div className='d-flex gap-2 justify-content-center mt-3'>
					<p className='m-0'>¿No tienes una cuenta?</p>
					<Link className='text-decoration-none text-info fw-semibold fst-italic' to='/register'>
						Registrarse
					</Link>
				</div>
			</div>
		</form>
	)
}
