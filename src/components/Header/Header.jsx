import CarritoIcon from '../CarritoIcon/CarritoIcon'
import { Link, useLocation } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { userContext } from '../../context/userContext'
import Button from '../Button/Button'


export default function Header() {

	let location = useLocation()

	useEffect(() => {
		window.scroll(0,0)
	}, [location])
	
	const { user ,logOut} = useContext(userContext)


	return (
		<header className='sticky-top'>
			<nav className='navbar navbar-expand-lg bg-dark fw-bold' data-bs-theme='dark'>
				<div className='container-fluid gap-5'>
					<Link className='navbar-brand fs-3' to='/'>
						<h1>Pet Shop</h1>
					</Link>
					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarSupportedContent'
						aria-controls='navbarSupportedContent'
						aria-expanded='false'
						aria-label='Toggle navigation'>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div className='collapse navbar-collapse' id='navbarSupportedContent'>
						<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
							<li className='nav-item mx-2'>
								<Link className='nav-link' aria-current='page' to='/'>
									Inicio
								</Link>
							</li>
							<li className='nav-item d-flex mx-2'>
								<div className='dropdown'>
									<Link
										className='nav-link dropdown-toggle'
										to='/'
										role='button'
										data-bs-toggle='dropdown'
										aria-expanded='false'>
										Categoria
									</Link>
									<ul className='dropdown-menu ' data-bs-theme='dark'>
										<li>
											<Link className='dropdown-item' to='/categoria/alimentos'>
												Alimentos
											</Link>
										</li>
										<li>
											<Link className='dropdown-item' to='/categoria/juguetes'>
												Juguetes
											</Link>
										</li>
										<li>
											<Link className='dropdown-item' to='/categoria/higiene'>
												Higiene
											</Link>
										</li>
										<li>
											<Link className='dropdown-item' to='/categoria/accesorios'>
												Accesorios
											</Link>
										</li>
										<li>
											<Link className='dropdown-item' to='/categoria/hábitats'>
												Hábitats
											</Link>
										</li>
									</ul>
								</div>
							</li>
						</ul>
						<ul className='navbar-nav mb-2 mb-lg-0 gap-3'>

							{
								Object.keys(user).length !== 0 ? (

									<li className='nav-item d-flex mx-2'>
										<div className='dropdown'>
											<a
												className='nav-link dropdown-toggle'
												to='/'
												role='button'
												data-bs-toggle='dropdown'
												aria-expanded='false'>
												{user.email}
											</a>
											<ul className='dropdown-menu ' data-bs-theme='dark'>
												<li className='text-center'>
													<Button onClick={logOut} className='btn btn-danger'>
														Desconectarse
													</Button>
												</li>
											</ul>
										</div>
									</li>
								) 
									: (
										<>
											<li className='nav-item'>
												<Link className='btn btn-light fw-semibold' to="/login">Iniciar Sesion</Link>
											</li>
											<li className='nav-item'>
												<Link className='btn btn-light fw-semibold' to="/register">Registrarse</Link>
											</li>
										</>
								)
							}
							<li className='nav-item'>
								<Link to="/cart">
									<CarritoIcon className='btn btn-light' />
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	)
}
