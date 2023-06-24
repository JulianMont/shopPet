import { useContext, useEffect, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link, useParams } from 'react-router-dom'
import { cartContext } from '../../context/cartContext'
import Loading from '../Loading/Loading'
import { getItemData } from '../../services/firebase'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


export default function ItemDetailContainer() {
	
	const [producto, setProducto] = useState({})
	const { id } = useParams()
	const {addItem} = useContext(cartContext)
	const { nombre, descripcion, precio, imagen, stock } = producto
	const [error, setError] = useState(null)
	const [sendToCart,setSendToCart] = useState(false)
	
	

	useEffect(() => {
		setError(null)
		getItemData(id)
			.then(resProducto => {
				setProducto(resProducto)
			})
			.catch((error) => {
				setError(error.message)
			})
	}, [id])

	function onAddToCart(cantidad) {
		addItem(producto, cantidad)
		setSendToCart(true)
		toast.success('Producto agregado al carrito', {
			position: "bottom-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			progress: undefined,
			theme: "light",
		})
	}

	if (error) {
		return (
			<div className="container">
				<div className="row">
					<h2>Error</h2>
					<p>{error}</p>
				</div>
			</div>
		)
	}
	
	if (Object.keys(producto).length === 0) {
		return <Loading />
	}

	return (
		<div className={`container d-flex justify-content-center align-items-center vh-100`}>
			<ToastContainer />
			<div className='card text-center w-100'>
				<div className='row g-0 align-items-center'>
					<div className='col-md-4'>
						<img
							src={imagen}
							className='img-fluid rounded-start w-75'
							alt={nombre}
						/>
					</div>
					<div className='col-md-8'>
						<div className='card-body'>
							<h1 className='card-title'>{nombre}</h1>
							<p className='card-text'>{descripcion}</p>

							{
								sendToCart
									? (
										<Link to={"/cart"} className={'btn btn-info'}>Ir al carrito</Link>
									)
									: (
											<ItemCount stock={stock} precio={precio} onAddToCart={onAddToCart} />
									)
							}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}