import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import CarritoIcon from '../CarritoIcon/CarritoIcon'

export default function Header() {




    return(
        <header className='sticky-top'>
            <nav className="navbar navbar-expand-lg bg-dark " data-bs-theme="dark">
                <div className="container-fluid gap-5">

                    <Link className="navbar-brand" to="/">Pet Shop</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-2">
                                <Link className="nav-link" aria-current="page" to="/">Inicio</Link>
                            </li>
                            <li className="nav-item d-flex mx-2">
                                <Link className="nav-link" aria-current="page" to="/product">Productos</Link>
                                <div className="dropdown">
                                    <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"></Link>
                                    <ul className="dropdown-menu" data-bs-theme="dark">
                                        <li><Link className="dropdown-item" to="#">Alimentos</Link></li>
                                        <li><Link className="dropdown-item" to="#">Juguetes</Link></li>
                                        <li><Link className="dropdown-item" to="#">Higiene</Link></li>
                                        <li><Link className="dropdown-item" to="#">Higiene</Link></li>
                                        <li><Link className="dropdown-item" to="#">Accesorios</Link></li>
                                        <li><Link className="dropdown-item" to="#">Habitats</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link" to="#">Contactanos</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className='nav-item'><Button className="btn">Iniciar Sesion</Button></li>
                            <li className='nav-item'><Button className="btn">Registrarse</Button></li>
                            <li className='nav-item'><CarritoIcon className="btn"/></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}