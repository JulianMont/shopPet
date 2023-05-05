import Button from '../Button/Button'
import CarritoIcon from '../CarritoIcon/CarritoIcon'
import './Header.css'

export default function Header() {

    return(

        <header className="header">

            <nav>
                <ul className="header__ul">

                    <li>
                        <a href="#">Inicio</a>
                    </li>
                    <li>
                        <a href="#">Productos</a>
                    </li>
                    <li>
                        <a href="#">Contactanos</a>
                    </li>
                </ul>
            </nav>

            <div className="header__logo">
                <img className="header__logo-img" src="./img/PetShop.png" alt="logo pet shop"/>
                {/* <h1>Pet Shop</h1> */}
            </div>

            <nav>
                <ul className="header__ul">

                    <li>
                        <Button className="header__button header__iniciar">Iniciar Sesion</Button>
                    </li>
                    <li>
                        <Button className="header__button header__registrarse">Registrarse</Button>
                    </li>

                    <li>
                        <CarritoIcon className="header__carritoIcon"/>
                    </li>
                </ul>
            </nav>

        </header>
    )

}