import Item from '../Item/Item'
import Loading from '../Loading/Loading'

export default function ItemList({ cargando, productos }) {


	if(cargando) return (<Loading />)

	return (
		<div className='container p-4	'>
			<div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-5  g-4'>
				{productos.map(producto => (
					<Item key={producto.id} {...producto} />
				))}
			</div>
		</div>
	)
}
