import Button from '../Button/Button'

import { useState } from 'react'

// Agregar alerta+disabled cuando llega a la max cantidad o a la menor cantidad

export default function ItemCount({ stock, precio , onAddToCart}) {
	const [cantidad, setCantidad] = useState(1)

	function handleSumaCantidad() {
		if (cantidad < stock) setCantidad(cantidad + 1)
	}

	function handleRestaCantidad() {
		if (cantidad > 1) setCantidad(cantidad - 1)
	}

	const desabilitarBotonResta = cantidad === 1
	const desabilitarBotonSuma = cantidad === stock || stock === 0

	const precioTotal = (cantidad * precio).toFixed(2)

	return (
		<div className='container d-flex flex-column align-items-center'>
			<p className={`fw-bold ${stock ? 'text-success' : 'text-danger'}`}>
				Stock {`${stock ? 'Disponible' : 'No disponible'}`}
			</p>
			<div className='d-flex align-items-baseline gap-4'>
				<Button
					disabled={desabilitarBotonResta}
					className={'btn btn-danger'}
					onClick={handleRestaCantidad}>
					-
				</Button>
				<p className='fw-bold'>{cantidad}</p>
				<Button
					disabled={desabilitarBotonSuma}
					className={'btn btn-success'}
					onClick={handleSumaCantidad}>
					+
				</Button>
			</div>
			<p className='fw-bold'>Total: ${precioTotal}</p>
			<Button onClick={() => { onAddToCart(cantidad) }} disabled={stock === 0} className={'btn btn-primary'}>
				Agregar al carrito
			</Button>
		</div>
	)
} 
