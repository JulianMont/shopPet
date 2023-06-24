import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import Button from '../Button/Button'
import { useContext } from 'react'
import { cartContext } from '../../context/cartContext'

export default function CarritoIcon({ className: style }) {

	const { totalItemsInCart } = useContext(cartContext) 

	return (
		<Button className={`${style} position-relative`}>
			<FontAwesomeIcon icon={faCartShopping} />
			{totalItemsInCart() > 0 &&
				<span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
					{totalItemsInCart()}
				</span>
			}
		</Button>
	)
}
