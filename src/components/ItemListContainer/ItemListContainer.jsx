import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getCategoryData, getData} from '../../services/firebase'

export default function ItemListContainer() {

	
	const [productos, setProductos] = useState([])
	const [error,setError] = useState(null)
	const { categoryid } = useParams()
	let [cargando, setCargando] = useState(true)


	const filterData = categoryid === undefined ? getData : getCategoryData

	useEffect(() => {
		setError(null)
		filterData(categoryid)
			.then(resProductos => setProductos(resProductos))
			.catch((error) => {
				setError(error.message)
			})
			.finally(() => {
			setCargando(false)
		})
	}, [categoryid])

	

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

	return (
		<div className="container">
			<div className="row">
				<h2 className='mb-4'>Productos</h2>
				<ItemList cargando={cargando} productos={productos} />
			</div>
		</div>

	)
}
