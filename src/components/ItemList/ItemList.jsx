import Item from "../Item/Item";


export default function ItemList({productos}) {

    return(

        <div className="container">

            <div className="row row-cols-4 g-4">

                {
                    productos.map( producto =>(
                        <Item 
                            key={producto.id}
                            {...producto}
                        />
                    ))
                }
            </div>
                    
        </div>


    )

}